import { z } from "zod";

export const sendMailSchema = z
  .object({
    firstname: z
      .string()
      .min(1, "Veuillez saisir votre prénom")
      .max(30, "votre prénom ne peut pas dépasser 30 caractères"),

    name: z
      .string()
      .min(1, "Veuillez saisir votre nom")
      .max(30, "Votre nom ne peut pas dépasser 30 caractères"),

    email: z.string().email("Veuillez saisir une adresse email valide"),
    telephone: z
      .string()
      .optional()
      .refine(
        (val) =>
          !val.trim() ||
          /^(?:\+33\s*|0)[1-9]\s*[0-9]{2}(\s*[0-9]{2}){3}\s*$/.test(val),
        {
          message: "Veuillez saisir un numéro de téléphone valide",
        },
      ),
    prefersPhone: z.boolean().optional().default(false),
    prefersEmail: z.boolean().optional().default(false),
    message: z
      .string()
      .min(1, "Veuillez saisir votre message")
      .max(500, "Votre message ne peut excéder 500 caractères"),
  })
  .refine((data) => data.prefersPhone || data.prefersEmail, {
    message: "Veuillez sélectionner un moyen de contact",
    path: ["wayToContact"],
  })
  .refine((data) => !(data.prefersPhone && !data.telephone), {
    message: "Veuillez saisir votre numéro de téléphone",
    path: ["telephone"],
  });
