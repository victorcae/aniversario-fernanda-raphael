"""Extract each drawing from a PNG as a separate image using connected components
on the alpha channel. Outputs one trimmed PNG per drawing to --out dir.
"""
from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
from PIL import Image


def extract(src: Path, out_dir: Path, alpha_threshold: int = 16, min_area: int = 400, dilate: int = 6) -> None:
    img = Image.open(src).convert("RGBA")
    arr = np.array(img)
    alpha = arr[:, :, 3]

    # Binary mask of non-transparent pixels
    mask = alpha > alpha_threshold

    # Dilate so nearby strokes merge into one drawing (fills small gaps)
    if dilate > 0:
        from scipy.ndimage import binary_dilation  # type: ignore
        mask_d = binary_dilation(mask, iterations=dilate)
    else:
        mask_d = mask

    # Connected components
    from scipy.ndimage import label  # type: ignore
    labels, n = label(mask_d)

    print(f"[{src.name}] found {n} components")

    out_dir.mkdir(parents=True, exist_ok=True)
    index: list[tuple[int, int, int, int, int, str]] = []  # area, x, y, w, h, name

    for i in range(1, n + 1):
        ys, xs = np.where(labels == i)
        if len(xs) < min_area:
            continue
        x0, x1 = xs.min(), xs.max()
        y0, y1 = ys.min(), ys.max()
        # Crop from ORIGINAL arr (not dilated) so we preserve exact alpha edges
        crop = arr[y0:y1 + 1, x0:x1 + 1].copy()

        # Within the crop, zero-out pixels that belong to other components
        local_labels = labels[y0:y1 + 1, x0:x1 + 1]
        keep = local_labels == i
        crop[~keep] = (0, 0, 0, 0)

        area = int(keep.sum())
        w, h = x1 - x0 + 1, y1 - y0 + 1
        index.append((area, int(x0), int(y0), int(w), int(h), ""))
        # Filename: order by reading order (top-to-bottom, left-to-right)

    # Sort by reading order, then name sprite_01, sprite_02, ...
    index.sort(key=lambda r: (r[2] // 40, r[1]))  # bucket y by 40px rows, then x
    stem = src.stem
    manifest: list[str] = []
    for idx, (area, x, y, w, h, _) in enumerate(index, 1):
        ys, xs = np.where(labels == _get_label_at(labels, x, y, w, h))
        # Re-derive to save actual crop
        # Actually simpler: redo crop from stored coords
        x1, y1 = x + w, y + h
        crop = arr[y:y1, x:x1].copy()
        local_labels = labels[y:y1, x:x1]
        target_label = np.bincount(local_labels[local_labels > 0].flatten()).argmax() if (local_labels > 0).any() else 0
        keep = local_labels == target_label
        crop[~keep] = (0, 0, 0, 0)
        name = f"{stem}_{idx:02d}.png"
        Image.fromarray(crop, "RGBA").save(out_dir / name, optimize=True)
        manifest.append(f"{name}\tx={x}\ty={y}\tw={w}\th={h}\tarea={area}")

    (out_dir / f"{stem}_manifest.txt").write_text("\n".join(manifest), encoding="utf-8")
    print(f"[{src.name}] saved {len(manifest)} sprites to {out_dir}")


def _get_label_at(labels: np.ndarray, x: int, y: int, w: int, h: int) -> int:
    sub = labels[y:y + h, x:x + w]
    vals = sub[sub > 0]
    if vals.size == 0:
        return 0
    return int(np.bincount(vals).argmax())


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--src", required=True)
    p.add_argument("--out", required=True)
    p.add_argument("--dilate", type=int, default=6)
    p.add_argument("--min-area", type=int, default=400)
    args = p.parse_args()
    extract(Path(args.src), Path(args.out), dilate=args.dilate, min_area=args.min_area)
