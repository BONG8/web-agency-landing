import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ArrowRight, ArrowUpRight, Mail, Construction } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { CharacterReveal, GlowingBadge } from "@/components/text-reveal";
import Image from "next/image";
import notebuddyScreen from "../public/notebuddy-screen.png";
import { CookiePolicy } from "@/components/cookie-policy";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-transparent bg-background/60 backdrop-blur-md transition-all">
        <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-heading font-semibold text-lg tracking-tight">
            C. Poretto
          </Link>
          <nav className="hidden md:flex gap-10 items-center">
            <Link href="#approccio" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              Approccio
            </Link>
            <Link href="#progetti" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              Progetti
            </Link>
            <Link href="#contatti" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              Contatti
            </Link>
            <ModeToggle />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center pt-20 pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-10">
                <FadeIn delay={0.1}>
                  <GlowingBadge>
                    <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                    Disponibile per nuovi progetti
                  </GlowingBadge>
                </FadeIn>

                <div className="space-y-4">
                  <CharacterReveal
                    text="Hai un problema digitale?"
                    className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] font-heading font-medium tracking-tight text-muted-foreground"
                    delay={0.2}
                  />
                  <CharacterReveal
                    text="Ho la soluzione."
                    className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] font-heading font-medium tracking-tight text-foreground"
                    delay={0.8}
                  />
                </div>

                <FadeIn delay={1.4}>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                    Non mi specializzo in una cosa sola. Mi specializzo nel capire cosa ti serve e costruirlo. 
                    Siti, sistemi, automazioni — se è codice, lo scrivo. Se è un casino, lo risolvo.
                  </p>
                </FadeIn>

                <FadeIn delay={1.6}>
                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <Button
                      size="lg"
                      asChild
                      className="rounded-none text-base h-14 px-8 bg-foreground hover:bg-foreground/90 text-background font-medium transition-transform hover:-translate-y-1"
                    >
                      <Link href="#contatti">
                        Iniziamo <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      asChild
                      className="rounded-none text-base h-14 px-8 border-none hover:bg-muted/50 transition-colors"
                    >
                      <Link href="#approccio">
                        Il mio approccio
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Approccio Section */}
        <section id="approccio" className="py-32 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
              <div className="lg:col-span-5 space-y-8">
                <FadeIn>
                  <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
                    Non sono un tuttofare.<br />
                    <span className="text-muted-foreground">Sono uno che si adatta.</span>
                  </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
                    <p>
                      Studio Informatica all&apos;ITIS Max Planck di Villorba. Ma mentre a scuola imparo la teoria,
                      fuori costruisco prodotti reali.
                    </p>
                    <p>
                      Questo mix mi rende diverso: ho le basi solide di chi studia, e la velocità di chi lavora sul campo.
                      Non ho i tempi morti delle agenzie. Non ho i preventivi gonfiati dei freelance navigati.
                    </p>
                    <p className="text-foreground font-normal">
                      Non mi interessa fare mille progetti mediocri. Mi interessa fare pochi progetti fatti bene,
                      con gente che capisce il valore di un lavoro fatto come si deve.
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Method blocks */}
              <div className="lg:col-span-6 lg:col-start-7 pt-4 lg:pt-0">
                <StaggerContainer className="space-y-12">
                  <StaggerItem>
                    <div className="flex gap-6 items-start group">
                      <span className="text-xs font-mono text-muted-foreground pt-1.5 w-6">01</span>
                      <div className="space-y-3 pb-8 border-b border-border/60 w-full group-hover:border-foreground transition-colors">
                        <h3 className="text-xl font-heading font-medium">Ascolto</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          Prima di scrivere una riga di codice, capisco cosa ti serve davvero.
                          Non quello che pensi di volere — quello che risolve il problema.
                        </p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex gap-6 items-start group">
                      <span className="text-xs font-mono text-muted-foreground pt-1.5 w-6">02</span>
                      <div className="space-y-3 pb-8 border-b border-border/60 w-full group-hover:border-foreground transition-colors">
                        <h3 className="text-xl font-heading font-medium">Costruisco</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          Niente template. Niente scorciatoie. Codice scritto da zero,
                          ottimizzato per essere veloce oggi e scalabile domani.
                        </p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex gap-6 items-start group">
                      <span className="text-xs font-mono text-muted-foreground pt-1.5 w-6">03</span>
                      <div className="space-y-3 pb-8 border-b border-border/60 w-full group-hover:border-foreground transition-colors">
                        <h3 className="text-xl font-heading font-medium">Consegno</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          Deadline rispettate. Comunicazione costante. Quando dico che è pronto,
                          è pronto — testato, deployato, funzionante.
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="progetti" className="py-32">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-20">
                Lavori Selezionati
              </h2>
            </FadeIn>

            <div className="space-y-32">
              {/* Codex Venezia */}
              <FadeIn>
                <div className="group">
                  <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-heading font-medium">Codex Venezia</h3>
                        </div>
                        <p className="text-muted-foreground tracking-wide text-sm uppercase">Sistema di Gestione Opere d&apos;Arte</p>
                      </div>

                      <div className="text-muted-foreground space-y-4 font-light leading-relaxed">
                        <p>
                          Digitalizzazione e gestione d&apos;archivio per un importante artista veneziano. 
                          Decenni di opere e centinaia di pezzi organizzati in un sistema strutturato.
                        </p>
                        <p>
                          Un database consultabile, filtrabile e aggiornabile da qualsiasi dispositivo. 
                          Non un sito vetrina, ma uno strumento di lavoro su misura per superare il caos fisico.
                        </p>
                      </div>

                      <div className="pt-4 flex items-center gap-3 text-sm text-muted-foreground">
                        <Construction className="h-4 w-4" />
                        <span>Sviluppo in corso</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-7 order-1 lg:order-2">
                      <div className="aspect-[4/3] bg-muted/40 flex items-center justify-center p-8 border border-border/50 group-hover:border-border transition-colors">
                        <div className="text-muted-foreground/40 font-heading text-xl font-light">
                          Immagini in arrivo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* NoteBuddy */}
              <FadeIn>
                <div className="group">
                  <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-heading font-medium">NoteBuddy</h3>
                        </div>
                        <p className="text-muted-foreground tracking-wide text-sm uppercase">Mind Mapping App</p>
                      </div>

                      <div className="text-muted-foreground space-y-4 font-light leading-relaxed">
                        <p>
                          Un&apos;app di mind mapping costruita da zero per trasformare idee sparse 
                          in mappe visuali interattive. 
                        </p>
                        <p>
                          Attualmente live con salvataggio locale, UI ottimizzata e interazioni fluide. 
                          Prossimi sviluppi: cloud sync e integrazione AI.
                        </p>
                      </div>

                      <div className="pt-4">
                        <a 
                          href="https://notebuddy.software" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors border-b border-foreground hover:border-muted-foreground pb-0.5"
                        >
                          Visita il progetto <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                      <div className="aspect-[4/3] overflow-hidden bg-muted/40 border border-border/50 group-hover:border-border transition-colors">
                        <Image
                          src={notebuddyScreen}
                          alt="NoteBuddy Screenshot"
                          className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contatti" className="py-32 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <FadeIn>
              <div className="space-y-6 mb-16 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight">
                  Iniziamo una conversazione.
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Scrivimi i dettagli del tuo progetto. Rispondo entro 24 ore con un parere onesto e diretto.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-background border border-border/50 p-8 md:p-12">
                <ContactForm />
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12 border-t border-border/60">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Email Diretta</p>
                  <a
                    href="mailto:poretto.cristian07@gmail.com"
                    className="inline-flex items-center gap-2 hover:text-muted-foreground transition-colors font-medium"
                  >
                    <Mail className="h-4 w-4" />
                    poretto.cristian07@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">Disponibilità</p>
                  <p className="font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    Accettando nuovi progetti
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p className="font-light">
            © {new Date().getFullYear()} C. Poretto.
          </p>
          <div className="flex items-center gap-6">
            <CookiePolicy />
            <span className="font-light">Mogliano Veneto, TV</span>
          </div>
        </div>
      </footer>
    </div>
  );
}