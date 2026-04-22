import { z } from "zod";

export const rsvpSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo").max(120),
  telefone: z.string().min(8, "Informe um celular válido").max(30),
  presenca: z.enum(["sim", "talvez", "nao"], {
    required_error: "Selecione um dos patinhos"
  }),
  acompanhantes: z.coerce.number().int().min(0).max(10)
});

export type RsvpInput = z.infer<typeof rsvpSchema>;
