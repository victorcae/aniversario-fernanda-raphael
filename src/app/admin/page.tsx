"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  type User
} from "firebase/auth";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp
} from "firebase/firestore";
import { toast } from "sonner";
import { auth, db } from "@/lib/firebase";
import { Download, LogOut, Users, X, Check, HelpCircle } from "lucide-react";

type Rsvp = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  presenca: "sim" | "nao" | "talvez";
  acompanhantes: number;
  nomesAcompanhantes?: string;
  restricoes?: string;
  mensagem?: string;
  createdAt: string | Timestamp;
};

export default function AdminPage() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);

  useEffect(() => {
    if (!auth) return;
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user || !db) return;
    const q = query(collection(db, "rsvps"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const items: Rsvp[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Rsvp, "id">)
        }));
        setRsvps(items);
      },
      (err) => toast.error(err.message)
    );
    return () => unsub();
  }, [user]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Bem-vinda de volta ♡");
    } catch {
      toast.error("Email ou senha incorretos");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    toast.success("Até breve ♡");
  }

  const stats = {
    sim: rsvps.filter((r) => r.presenca === "sim").length,
    nao: rsvps.filter((r) => r.presenca === "nao").length,
    talvez: rsvps.filter((r) => r.presenca === "talvez").length,
    total: rsvps
      .filter((r) => r.presenca === "sim")
      .reduce((acc, r) => acc + 1 + (r.acompanhantes || 0), 0)
  };

  function exportCSV() {
    const rows = [
      [
        "Nome",
        "Email",
        "Telefone",
        "Presença",
        "Acompanhantes",
        "Nomes Acompanhantes",
        "Restrições",
        "Mensagem",
        "Data de envio"
      ],
      ...rsvps.map((r) => [
        r.nome,
        r.email,
        r.telefone,
        r.presenca,
        String(r.acompanhantes),
        r.nomesAcompanhantes || "",
        r.restricoes || "",
        r.mensagem || "",
        typeof r.createdAt === "string" ? r.createdAt : ""
      ])
    ];
    const csv = rows
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `convidados-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (user === undefined) {
    return (
      <main className="min-h-screen bg-cream-50 flex items-center justify-center">
        <p className="font-smallcaps tracking-[0.3em] text-olive-700 text-sm">
          carregando...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-50 paper-texture">
      <AnimatePresence mode="wait">
        {!user ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center px-6"
          >
            <motion.form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleLogin}
              className="w-full max-w-md bg-white/60 backdrop-blur-sm border border-olive-600/20 p-10 space-y-8"
            >
              <div className="text-center">
                <p className="font-smallcaps tracking-[0.4em] text-xs text-olive-700 mb-3">
                  área dos anfitriões
                </p>
                <h1 className="font-script text-5xl text-olive-700">
                  F <span className="font-serif italic text-2xl">&</span> R
                </h1>
                <div className="mt-6 w-16 h-px bg-olive-600/40 mx-auto" />
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block font-smallcaps tracking-[0.25em] text-xs text-olive-700 mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-elegant"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block font-smallcaps tracking-[0.25em] text-xs text-olive-700 mb-2">
                    senha
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-elegant"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-elegant bg-olive-700 text-cream-50 hover:bg-olive-800 disabled:opacity-60"
              >
                {loading ? "entrando..." : "entrar"}
              </button>
            </motion.form>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <header className="border-b border-olive-600/15 bg-white/60 backdrop-blur-sm sticky top-0 z-20">
              <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="font-smallcaps tracking-[0.3em] text-[11px] text-olive-700">
                    painel dos anfitriões
                  </p>
                  <p className="font-script text-2xl text-olive-800">
                    Fernanda <span className="font-serif italic text-base">&</span> Raphael
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={exportCSV}
                    className="flex items-center gap-2 px-4 py-2 border border-olive-600/30 text-olive-700 hover:bg-olive-700 hover:text-cream-50 transition-colors font-smallcaps tracking-[0.2em] text-[11px]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    exportar
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-olive-700 hover:text-olive-900 font-smallcaps tracking-[0.2em] text-[11px]"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    sair
                  </button>
                </div>
              </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <StatCard
                  icon={<Check className="w-5 h-5" />}
                  label="confirmados"
                  value={stats.sim}
                  tone="olive"
                />
                <StatCard
                  icon={<X className="w-5 h-5" />}
                  label="não vão"
                  value={stats.nao}
                  tone="muted"
                />
                <StatCard
                  icon={<HelpCircle className="w-5 h-5" />}
                  label="talvez"
                  value={stats.talvez}
                  tone="cream"
                />
                <StatCard
                  icon={<Users className="w-5 h-5" />}
                  label="total de pessoas"
                  value={stats.total}
                  tone="olive-dark"
                />
              </div>

              <div className="bg-white/60 backdrop-blur-sm border border-olive-600/15 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-olive-600/15 bg-olive-50/40">
                        <Th>Nome</Th>
                        <Th>Presença</Th>
                        <Th>Contato</Th>
                        <Th>Acompanhantes</Th>
                        <Th>Restrições</Th>
                        <Th>Mensagem</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {rsvps.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="py-16 text-center font-body italic text-olive-700/60"
                          >
                            Ainda não há confirmações. Em breve ♡
                          </td>
                        </tr>
                      ) : (
                        rsvps.map((r) => (
                          <tr
                            key={r.id}
                            className="border-b border-olive-600/10 hover:bg-olive-50/30 transition-colors"
                          >
                            <td className="px-4 py-4">
                              <p className="font-serif text-olive-800 text-base">{r.nome}</p>
                            </td>
                            <td className="px-4 py-4">
                              <PresencaBadge value={r.presenca} />
                            </td>
                            <td className="px-4 py-4 text-olive-700">
                              <p>{r.email}</p>
                              <p className="text-xs text-olive-600">{r.telefone}</p>
                            </td>
                            <td className="px-4 py-4 text-olive-700">
                              {r.acompanhantes > 0 ? (
                                <>
                                  <p>+{r.acompanhantes}</p>
                                  <p className="text-xs text-olive-600 italic">
                                    {r.nomesAcompanhantes}
                                  </p>
                                </>
                              ) : (
                                <span className="text-olive-600/60">—</span>
                              )}
                            </td>
                            <td className="px-4 py-4 text-olive-700 text-xs">
                              {r.restricoes || <span className="text-olive-600/60">—</span>}
                            </td>
                            <td className="px-4 py-4 text-olive-700 text-xs max-w-xs">
                              {r.mensagem ? (
                                <span className="italic">"{r.mensagem}"</span>
                              ) : (
                                <span className="text-olive-600/60">—</span>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-4 text-left font-smallcaps tracking-[0.2em] text-[11px] text-olive-700">
      {children}
    </th>
  );
}

function StatCard({
  icon,
  label,
  value,
  tone
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  tone: "olive" | "muted" | "cream" | "olive-dark";
}) {
  const tones = {
    olive: "bg-olive-600 text-cream-50",
    muted: "bg-white/80 text-olive-800 border border-olive-600/20",
    cream: "bg-cream-200 text-olive-800",
    "olive-dark": "bg-olive-800 text-cream-50"
  };
  return (
    <div className={`${tones[tone]} p-6 flex flex-col gap-2`}>
      <div className="flex items-center gap-2 opacity-80">
        {icon}
        <span className="font-smallcaps tracking-[0.25em] text-[10px]">{label}</span>
      </div>
      <p className="font-serif text-4xl font-light">{value}</p>
    </div>
  );
}

function PresencaBadge({ value }: { value: "sim" | "nao" | "talvez" }) {
  const map = {
    sim: { label: "sim", className: "bg-olive-600 text-cream-50" },
    nao: { label: "não", className: "bg-olive-900/70 text-cream-50" },
    talvez: { label: "talvez", className: "bg-cream-300 text-olive-800" }
  };
  const { label, className } = map[value];
  return (
    <span
      className={`inline-block px-3 py-1 font-smallcaps tracking-[0.2em] text-[10px] ${className}`}
    >
      {label}
    </span>
  );
}
