"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
    email: z.string().email("Inserisci un'email valida"),
    message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
});

export type ContactFormState = {
    success?: boolean;
    error?: string;
    fieldErrors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
};

export async function sendContactEmail(
    prevState: ContactFormState | null,
    formData: FormData
): Promise<ContactFormState> {
    try {
        // Controllo Honeypot: se il campo nascosto è compilato, molto probabilmente è un bot.
        // Simuliamo un successo per ingannarlo e non inviamo l'email.
        if (formData.get("company")) {
            return { success: true };
        }

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        const validatedData = contactSchema.safeParse(data);

        if (!validatedData.success) {
            return {
                success: false,
                fieldErrors: validatedData.error.flatten().fieldErrors,
            };
        }

        const { name, email, message } = validatedData.data;

        const { error } = await resend.emails.send({
            from: "Poretto Cristian <contatti@porettocristian.it>", // Or the user's verified domain if available
            to: "poretto.cristian07@gmail.com",
            subject: `Nuovo messaggio dal portfolio da ${name}`,
            replyTo: email,
            text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
        });

        if (error) {
            console.error("Resend error:", error);
            return {
                success: false,
                error: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
            };
        }

        return {
            success: true,
        };
    } catch (error) {
        console.error("Server error:", error);
        return {
            success: false,
            error: "Si è verificato un errore imprevisto. Riprova più tardi.",
        };
    }
}
