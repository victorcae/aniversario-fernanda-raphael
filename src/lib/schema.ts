import { z } from "zod";

export const rsvpSchema = z
  .object({
    nome: z.string().min(2, "Informe seu nome completo").max(120),
    email: z.string().email("Email inválido").max(150),
    telefone: z.string().min(8, "Informe um telefone válido").max(30),
    presenca: z.enum(["sim", "nao", "talvez"], {
      required_error: "Selecione uma opção"
    }),
    acompanhantes: z.coerce.number().int().min(0).max(10),
    nomesAcompanhantes: z.string().max(400).optional().default(""),
    restricoes: z.string().max(300).optional().default(""),
    mensagem: z.string().max(600).optional().default("")
  })
  .refine(
    (data) =>
      data.acompanhantes === 0 ||
      (data.nomesAcompanhantes && data.nomesAcompanhantes.trim().length > 0),
    {
      message: "Informe o nome dos acompanhantes",
      path: ["nomesAcompanhantes"]
    }
  );

export type RsvpInput = z.infer<typeof rsvpSchema>;
