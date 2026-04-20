"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { rsvpSchema, type RsvpInput } from "@/lib/schema";
import { LeafSprig } from "./illustrations/BotanicalAccents";

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
    formState: { errors, isSubmitting }
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
      mensagem: ""
    }
  });

  const presenca = watch("presenca");
  const acompanhantes = watch("acompanhantes");

  async function onSubmit(data: RsvpInput) {
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
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
      const message = err instanceof Error ? err.message : "Erro inesperado";
      toast.error(message);
    }
  }

  return (
    <section
      ref={ref}
      id="rsvp"
      className="relative py-28 md:py-40 px-6 bg-watercolor-sky paper-texture overflow-hidden"
    >
      <LeafSprig className="hidden lg:block absolute top-20 left-10 w-24 opacity-40" />
      <LeafSprig className="hidden lg:block absolute bottom-20 right-10 w-24 opacity-40 scale-x-[-1]" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-smallcaps tracking-[0.4em] text-xs text-olive-700 mb-4">
            sua presença é nosso presente
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-olive-800 tracking-wide">
            Confirme
            <span className="font-script text-olive-600 italic"> sua presença</span>
          </h2>
          <div className="mt-6 w-16 h-px bg-olive-600/50 mx-auto" />
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center py-20 bg-cream-50/80 backdrop-blur-sm border border-olive-600/20 px-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                className="text-6xl text-olive-600 mb-6"
              >
                ♡
              </motion.div>
              <h3 className="font-script text-4xl md:text-5xl text-olive-700 mb-4">
                Obrigada, {submittedName}!
              </h3>
              <p className="font-body italic text-olive-800 text-lg leading-relaxed max-w-md mx-auto">
                Sua presença foi confirmada com muito carinho. Mal podemos
                esperar para celebrar este momento ao seu lado.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 font-smallcaps tracking-[0.3em] text-xs text-olive-700 hover:text-olive-900 underline underline-offset-4"
              >
                enviar outra confirmação
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              onSubmit={handleSubmit(onSubmit)}
              className="relative bg-cream-50/70 backdrop-blur-sm border border-olive-600/20 p-8 md:p-12 space-y-8"
            >
              <div>
                <label className="block font-smallcaps tracking-[0.2em] text-sm text-olive-700 mb-2">
                  seu nome completo
                </label>
                <input
                  {...register("nome")}
                  className="input-elegant text-base"
                  placeholder="como gostaria de ser identificado"
                />
                {errors.nome && (
                  <p className="mt-2 text-sm text-red-700/80 italic">{errors.nome.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-smallcaps tracking-[0.2em] text-sm text-olive-700 mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="input-elegant text-base"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-700/80 italic">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-smallcaps tracking-[0.2em] text-sm text-olive-700 mb-2">
                    whatsapp
                  </label>
                  <input
                    {...register("telefone")}
                    className="input-elegant text-base"
                    placeholder="(11) 90000-0000"
                  />
                  {errors.telefone && (
                    <p className="mt-2 text-sm text-red-700/80 italic">{errors.telefone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-smallcaps tracking-[0.25em] text-xs text-olive-700 mb-4">
                  você poderá comparecer?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: "sim", label: "sim, com alegria", emoji: "♡" },
                    { v: "talvez", label: "talvez", emoji: "◦" },
                    { v: "nao", label: "não poderei", emoji: "~" }
                  ].map(({ v, label, emoji }) => (
                    <label key={v} className="cursor-pointer">
                      <input
                        type="radio"
                        value={v}
                        {...register("presenca")}
                        className="sr-only peer"
                      />
                      <div className="peer-checked:bg-olive-700 peer-checked:text-cream-50 peer-checked:border-olive-700 border border-olive-600/40 py-4 px-3 text-center transition-all duration-300 hover:border-olive-600">
                        <div className="font-serif text-xl italic mb-1">{emoji}</div>
                        <div className="font-smallcaps tracking-[0.12em] text-xs">
                          {label}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.presenca && (
                  <p className="mt-2 text-sm text-red-700/80 italic">{errors.presenca.message}</p>
                )}
              </div>

              {presenca !== "nao" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 overflow-hidden"
                >
                  <div>
                    <label className="block font-smallcaps tracking-[0.2em] text-sm text-olive-700 mb-2">
                      número de acompanhantes
                    </label>
                    <select
                      {...register("acompanhantes")}
                      className="input-elegant appearance-none cursor-pointer"
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <label className="block font-smallcaps tracking-[0.2em] text-sm text-olive-700 mb-2">
                        nome dos acompanhantes
                      </label>
                      <input
                        {...register("nomesAcompanhantes")}
                        className="input-elegant text-base"
                        placeholder="separe por vírgula"
                      />
                      {errors.nomesAcompanhantes && (
                        <p className="mt-2 text-sm text-red-700/80 italic">
                          {errors.nomesAcompanhantes.message}
                        </p>
                      )}
                    </motion.div>
                  )}

                  <div>
                    <label className="block font-smallcaps tracking-[0.2em] text-sm text-olive-700 mb-2">
                      restrições alimentares <span className="italic text-olive-600">(opcional)</span>
                    </label>
                    <input
                      {...register("restricoes")}
                      className="input-elegant text-base"
                      placeholder="alergias, intolerâncias, dietas especiais"
                    />
                  </div>
                </motion.div>
              )}

              <div>
                <label className="block font-smallcaps tracking-[0.2em] text-sm text-olive-700 mb-2">
                  mensagem para o casal <span className="italic text-olive-600">(opcional)</span>
                </label>
                <textarea
                  {...register("mensagem")}
                  rows={4}
                  className="textarea-elegant text-base"
                  placeholder="um recado, um desejo, uma lembrança..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-elegant bg-olive-700 text-cream-50 hover:bg-olive-800 disabled:opacity-60 disabled:cursor-not-allowed"
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
