"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMailSchema } from "@/libs/zod-schemas";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Label from "../Label/Label";
import { sendMail } from "@/actions/sendMail";
import Button from "../Button/Button";
import { SendMailResponse } from "@/actions/sendMail";
import { ContactFormData } from "@/libs/zod-schemas";

// export interface ContactFormData{
//   name: string;
//   firstname: string;
//   email: string;
//   telephone?: string;
//   message: string;
//   prefersEmail?: boolean;
//   prefersPhone?: boolean;
//   wayToContact?: never;
// }



export default function ContactForm() {
  //State
  const [showForm, setShowForm] = useState(true);

  const [serverState, setServerState] = useState<SendMailResponse | null>(null);

  const [isPending, setIsPending] = useState<boolean>(false);


  // React-Hook-Form + Resolver pour Zod
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors: clientErrors, isSubmitting, isSubmitted },
  } = useForm<ContactFormData>({
    resolver: zodResolver(sendMailSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  // Variables
  const firstname = watch("firstname");
  const name = watch("name");
  const email = watch("email");
  const telephone = watch("telephone");
  const message = watch("message");

  // Envoi du formulaire au serveur
  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    
  const result = await sendMail(null, formData);

    setServerState({
      success: result.success,
      message: result.message,
      fieldErrors: result.fieldErrors || {},
      error: result.error || undefined,
    });
    setIsPending(false);
  };
    
  useEffect(() => {
    if (serverState?.success) {
      setShowForm(false);
    }
  }, [serverState]);

  // Si succès, afficher uniquement le message et le bouton
  if (serverState?.success && !showForm) {
    return (
      <div>
        <p className="formSuccess mb-6">{serverState.message}</p>
        <div className="block mx-auto w-fit">
          <Button
            type="button"
            onClick={() => {
              reset(); // vide les champs
              setServerState(null);
              setShowForm(true); // réaffiche le formulaire
            }}
          >
            Nouveau message
          </Button>
        </div>
      </div>
    );
  }

  if (showForm)
    return (
      <>
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto flex flex-col gap-6 items-center"
        >
          <p className="text-center mb-10">
            {/* eslint-disable-next-line */}
            Vous avez une question ou souhaitez travailler avec moi? N'hésitez
            pas à me contacter via ce formulaire, je vous répondrai au plus
            vite!
          </p>
          {/* Informations personnelles */}
          <div className="flex flex-col gap-8 items-center w-full">
            {/* Nom de famille */}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder=""
                autoComplete="family-name"
                className="input peer"
              />
              <Label htmlFor={"name"} value={name}>
                Nom*
              </Label>

              {/* Erreur côté client */}
              {clientErrors.name && (
                <p className="formError">{clientErrors.name.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.name && !clientErrors.name && (
                <p className="formError">{serverState.fieldErrors.name}</p>
              )}
            </div>
            {/* Prénom */}{" "}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <input
                type="text"
                id="firstname"
                {...register("firstname")}
                placeholder=""
                autoComplete="given-name"
                className="input peer"
              />
              <Label htmlFor={"firstname"} value={firstname}>
                Prénom*
              </Label>

              {/* Erreur côté client */}
              {clientErrors.firstname && (
                <p className="formError">{clientErrors.firstname.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.firstname &&
                !clientErrors.firstname && (
                  <p className="formError">
                    {serverState.fieldErrors.firstname}
                  </p>
                )}
            </div>
            {/* Adresse email */}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder=""
                  autoComplete="email"
                  className="input peer"
                />
                <Label htmlFor={"email"} value={email}>
                  Email*
                </Label>
              </div>
              {/* Erreur côté client */}
              {clientErrors.email && (
                <p className="formError">{clientErrors.email.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.email && !clientErrors.email && (
                <p className="formError">{serverState.fieldErrors.email}</p>
              )}
            </div>
            {/* Téléphone */}
            <div className="w-full max-w-[400px] sm:w-fit relative">
              <input
                {...register("telephone")}
                type="tel"
                id="telephone"
                placeholder=""
                autoComplete="tel"
                className="input peer"
              />
              <Label htmlFor={"telephone"} value={telephone}>
                Téléphone
              </Label>

              {/* Erreur côté client */}
              {clientErrors.telephone && (
                <p className="formError">{clientErrors.telephone.message}</p>
              )}
              {/* Erreur côté serveur */}
              {serverState?.fieldErrors?.telephone &&
                !clientErrors.telephone && (
                  <p className="formError">
                    {serverState.fieldErrors.telephone}
                  </p>
                )}
            </div>
          </div>
          {/* Choix du mode de contact */}
          <div className="text-center mt-5 mb-2">
            <p className="mb-3">
              Par quel moyen préférez-vous être recontacté?*
            </p>
            <div className="flex justify-center text-center items-center gap-10 mb-3">
              <div className="flex items-center">
                <label
                  htmlFor="prefersEmail"
                  className="label inline-block align-middle mr-2"
                >
                  Email:
                </label>
                <input
                  type="checkbox"
                  {...register("prefersEmail", {
                    onChange: () => {
                      // ✅ Trigger seulement si déjà soumis
                      if (isSubmitted) {
                        trigger("wayToContact");
                      }
                    },
                  })}
                  id="prefersEmail"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="prefersPhone"
                  className="label inline-block align-middle mr-2"
                >
                  Téléphone:
                </label>
                <input
                  type="checkbox"
                  {...register("prefersPhone", {
                    onChange: () => {
                      // ✅ Trigger seulement si déjà soumis
                      if (isSubmitted) {
                        trigger("wayToContact");
                        trigger("telephone");
                      }
                    },
                  })}
                  id="prefersPhone"
                />
              </div>
            </div>
            {clientErrors?.wayToContact && (
              <p className="formError">{clientErrors.wayToContact.message}</p>
            )}
            {serverState?.fieldErrors?.wayToContact &&
              !clientErrors.wayToContact && (
                <p className="formError">
                  {serverState.fieldErrors.wayToContact}
                </p>
              )}
          </div>
          {/* Message */}
          <div className="w-full max-w-[700px] md:w-fit relative">
            <textarea
              className="input peer  w-fit max-w-full"
              rows={8}
              cols={80}
              id="message"
              {...register("message")}
              placeholder=""
            />
            <Label htmlFor={message} value={message}>
              Votre message*
            </Label>
            {/* Erreur client */}
            {clientErrors?.message && (
              <p className="formError">{clientErrors.message.message}</p>
            )}
            {/* Erreur serveur */}
            {serverState?.fieldErrors?.message && !clientErrors.message && (
              <p className="formError">{serverState?.fieldErrors.message}</p>
            )}
          </div>
          {/* Bouton d'envoi */}{" "}
          <div className="block w-[150px] mx-auto">
            <Button disabled={isSubmitting || isSubmitting} type="submit">
              {isSubmitting || isPending ? (
                <span className="flex items-center text-sand justify-center gap-2">
                  Envoi en cours... <ClipLoader size={20} color="#f3f4f6" />
                </span>
              ) : (
                "Envoyer"
              )}
            </Button>
          </div>
          {/* Erreur serveur générale */}
          {serverState?.error && !serverState?.fieldErrors && (
            <div className="formError">{serverState.error}</div>
          )}
        </form>
      </>
    );
}
