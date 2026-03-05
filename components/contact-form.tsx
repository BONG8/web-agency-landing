"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { sendContactEmail, ContactFormState } from "@/app/actions/send-email";

const initialState: ContactFormState = {
    success: false,
    error: "",
    fieldErrors: {},
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full h-12 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all hover:glow-cyan-sm disabled:opacity-50"
            size="lg"
        >
            {pending ? "Invio in corso..." : "Invia"}
        </Button>
    );
}

export function ContactForm() {
    const [state, formAction] = useActionState(sendContactEmail, initialState);

    if (state.success) {
        return (
            <div className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold text-cyan-400">Messaggio inviato!</h3>
                <p className="text-muted-foreground">Grazie per avermi contattato. Ti risponderò il prima possibile.</p>
                <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="mt-4"
                >
                    Invia un altro messaggio
                </Button>
            </div>
        );
    }

    return (
        <form className="space-y-6" action={formAction}>
            {state.error && (
                <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
                    {state.error}
                </div>
            )}

            {/* Honeypot field per bloccare lo spam */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Azienda</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                <input
                    id="name"
                    name="name"
                    className={`flex h-11 w-full rounded-lg border ${state.fieldErrors?.name ? 'border-red-500 focus-visible:ring-red-500/50 focus-visible:border-red-500' : 'border-input focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50'} bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 transition-all`}
                    placeholder="Il tuo nome"
                />
                {state.fieldErrors?.name && (
                    <p className="text-sm text-red-500">{state.fieldErrors.name[0]}</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className={`flex h-11 w-full rounded-lg border ${state.fieldErrors?.email ? 'border-red-500 focus-visible:ring-red-500/50 focus-visible:border-red-500' : 'border-input focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50'} bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 transition-all`}
                    placeholder="tu@esempio.it"
                />
                {state.fieldErrors?.email && (
                    <p className="text-sm text-red-500">{state.fieldErrors.email[0]}</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                <textarea
                    id="message"
                    name="message"
                    className={`flex min-h-30 w-full rounded-lg border ${state.fieldErrors?.message ? 'border-red-500 focus-visible:ring-red-500/50 focus-visible:border-red-500' : 'border-input focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50'} bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 transition-all resize-none`}
                    placeholder="Descrivi il problema in 2 righe. Al resto ci pensiamo insieme."
                />
                {state.fieldErrors?.message && (
                    <p className="text-sm text-red-500">{state.fieldErrors.message[0]}</p>
                )}
            </div>

            <SubmitButton />
        </form>
    );
}
