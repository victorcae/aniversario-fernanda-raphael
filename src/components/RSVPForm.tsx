"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { rsvpSchema, type RsvpInput } from "@/lib/schema";

const DUCKS = [
  { v: "sim",    label: "confirmado!",    src: "/images/icons/duck-confirmado.png" },
  { v: "talvez", label: "em análise...",  src: "/images/icons/duck-analise.png" },
  { v: "nao",    label: "não vai dar =(", src: "/images/icons/duck-nao.png" },
];

export function RSVPForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      presenca: undefined,
      acompanhantes: 0,
      nomesAcompanhantes: "",
      restricoes: "",
      mensagem: "",
    },
  });

  const presenca = watch("presenca");
  const acompanhantes = watch("acompanhantes");

  async function onSubmit(data: RsvpInput) {
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erro ao enviar");
      }
      setSubmittedName(data.nome.split(" ")[0]);
      setSubmitted(true);
      reset();
      toast.success("Presença registrada com carinho ♡");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro inesperado");
    }
  }

  return (
    <section
      ref={ref}
      id="rsvp"
      className="relative py-28 md:py-36 px-6 bg-paper-50 border-t border-ink-600/10"
    >
      <div className="max-w-lg mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <p className="font-typewriter tracking-[0.28em] text-[13px] md:text-[15px] text-ink-600 uppercase">
            sua presença é nosso presente
          </p>
          <h2 className="mt-5 font-script text-6xl md:text-8xl text-ink-600">
            Confirme sua presença
          </h2>
          <div className="mt-4 w-16 h-px bg-ink-600/40 mx-auto" />
        </motion.div>

        <AnimatePresence mode="wait">
          {/* ── Success state ── */}
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center py-16 px-8 border border-ink-600/25 bg-paper-100"
            >
              {/* Confirmado duck */}
              <div className="flex justify-center mb-6">
                <img src={DUCKS[0].src} alt="" className="h-40 w-auto" />
              </div>
              <h3 className="font-script text-5xl md:text-6xl text-ink-600">
                Obrigada, {submittedName}!
              </h3>
              <p className="mt-4 font-serif italic text-ink-700 text-lg leading-relaxed max-w-sm mx-auto">
                Sua presença foi confirmada com muito carinho. Mal podemos
                esperar para celebrar ao seu lado.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 font-typewriter tracking-[0.22em] text-[13px] text-ink-600 hover:text-ink-800 underline underline-offset-4 uppercase"
              >
                enviar outra confirmação
              </button>
            </motion.div>

          ) : (
            /* ── Form ── */
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {/* Nome */}
              <div>
                <label className="block font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-2">
                  seu nome completo
                </label>
                <input
                  {...register("nome")}
                  className="input-ink"
                  placeholder="como gostaria de ser identificado"
                />
                {errors.nome && (
                  <p className="mt-2 text-sm text-red-600/80 italic">{errors.nome.message}</p>
                )}
              </div>

              {/* Email + WhatsApp */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="input-ink"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600/80 italic">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-2">
                    whatsapp
                  </label>
                  <input
                    {...register("telefone")}
                    className="input-ink"
                    placeholder="(11) 90000-0000"
                  />
                  {errors.telefone && (
                    <p className="mt-2 text-sm text-red-600/80 italic">{errors.telefone.message}</p>
                  )}
                </div>
              </div>

              {/* Presence — duck icons */}
              <div>
                <p className="font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-6 text-center">
                  você poderá comparecer?
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {DUCKS.map(({ v, src, label }) => (
                    <label key={v} className="cursor-pointer group">
                      <input
                        type="radio"
                        value={v}
                        {...register("presenca")}
                        className="sr-only peer"
                      />
                      <div className="flex flex-col items-center gap-3 border border-ink-600/20 py-5 px-2 transition-all duration-300 peer-checked:border-ink-600 peer-checked:bg-paper-100 group-hover:border-ink-600/50">
                        <img src={src} alt="" className="h-32 md:h-36 w-auto" />
                        <span className="font-script text-ink-600 text-xl md:text-2xl leading-none">
                          {label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.presenca && (
                  <p className="mt-2 text-sm text-red-600/80 italic">{errors.presenca.message}</p>
                )}
              </div>

              {/* Guests (only when not "nao") */}
              {presenca !== "nao" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45 }}
                  className="space-y-6 overflow-hidden"
                >
                  <div>
                    <label className="block font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-2">
                      número de acompanhantes
                    </label>
                    <select
                      {...register("acompanhantes")}
                      className="input-ink appearance-none cursor-pointer"
                    >
                      {[0, 1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n === 0 ? "nenhum" : `${n} ${n === 1 ? "acompanhante" : "acompanhantes"}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  {Number(acompanhantes) > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <label className="block font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-2">
                        nome dos acompanhantes
                      </label>
                      <input
                        {...register("nomesAcompanhantes")}
                        className="input-ink"
                        placeholder="separe por vírgula"
                      />
                    </motion.div>
                  )}

                  <div>
                    <label className="block font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-2">
                      restrições alimentares
                      <span className="ml-1 normal-case tracking-normal font-serif italic text-ink-600/60">
                        (opcional)
                      </span>
                    </label>
                    <input
                      {...register("restricoes")}
                      className="input-ink"
                      placeholder="alergias, intolerâncias, dietas especiais"
                    />
                  </div>
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label className="block font-typewriter tracking-[0.22em] text-[13px] text-ink-600 uppercase mb-2">
                  mensagem para o casal
                  <span className="ml-1 normal-case tracking-normal font-serif italic text-ink-600/60">
                    (opcional)
                  </span>
                </label>
                <textarea
                  {...register("mensagem")}
                  rows={4}
                  className="textarea-ink"
                  placeholder="um recado, um desejo, uma lembrança..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-ink disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "enviando..." : "confirmar com carinho"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
