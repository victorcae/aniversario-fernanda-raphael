import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { rsvpSchema } from "@/lib/schema";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = rsvpSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const db = adminDb();
    const doc = await db.collection("rsvps").add({
      ...parsed.data,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ id: doc.id, ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erro desconhecido";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
