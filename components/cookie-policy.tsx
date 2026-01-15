import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function CookiePolicy() {
  return (
    <Sheet>
      <SheetTrigger className="text-xs hover:underline underline-offset-4 hover:text-foreground transition-colors">
        Cookie Policy
      </SheetTrigger>
      <SheetContent side="bottom" className="h-auto">
        <SheetHeader className="text-left pb-6">
          <SheetTitle>Informativa sui Cookie</SheetTitle>
          <SheetDescription className="space-y-4" asChild>
            <div>
                <p>
                Questo sito web è stato progettato con il massimo rispetto per la
                tua privacy. Vogliamo informarti che <strong>non utilizziamo cookie 
                di profilazione</strong> né di terze parti per tracciare il tuo comportamento 
                online a scopi pubblicitari.
                </p>
                <p>
                Durante la navigazione su questo sito, non vengono raccolti dati
                personali tramite cookie. Eventuali dati salvati nel tuo browser (come
                il Local Storage) servono esclusivamente a garantire funzionalità
                tecniche essenziali, come il salvataggio della tua preferenza per
                il tema (Chiaro/Scuro).
                </p>
                <p>
                Non è necessario alcun consenso esplicito per la navigazione, in
                quanto non sono presenti cookie che richiedono un trattamento dati
                soggetto a GDPR per scopi di marketing.
                </p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}