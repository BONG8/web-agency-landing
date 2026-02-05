import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { ArrowRight, Zap, Target, Wrench, ExternalLink, Mail, Brain, Save, Palette, Construction } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { CharacterReveal, GlowingBadge } from "@/components/text-reveal";
import Image from "next/image";
import notebuddyScreen from "../public/notebuddy-screen.png";
import { CookiePolicy } from "@/components/cookie-policy";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Cristian Poretto
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="#approccio" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Approccio
            </Link>
            <Link href="#progetti" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
              Progetti
            </Link>
            <Link href="#contatti" className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors">
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
        <section className="py-24 md:py-40 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
          
          <div className="container px-4 space-y-8 max-w-4xl">
            <FadeIn delay={0.1}>
              <GlowingBadge>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Sviluppatore Web · Problem Solver
              </GlowingBadge>
            </FadeIn>
            
            <CharacterReveal 
              text="Hai un problema digitale? Ho la soluzione."
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight "
              delay={0.3}
            />
            
            <FadeIn delay={1.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Non mi specializzo in una cosa sola. Mi specializzo nel capire cosa ti serve e costruirlo. 
                Siti, sistemi, automazioni — se è codice, lo scrivo. Se è un casino, lo risolvo.
              </p>
            </FadeIn>
            
            <FadeIn delay={1.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  asChild 
                  className="rounded-full text-lg h-12 px-8 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all hover:glow-cyan"
                >
                  <Link href="#contatti">
                    Parlami del tuo progetto <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="rounded-full text-lg h-12 px-8 border-border hover:border-cyan-500/50 hover:bg-cyan-500/5"
                >
                  <Link href="#approccio">
                    Come lavoro ↓
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Approccio Section */}
        <section id="approccio" className="py-20 md:py-32 border-t border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="space-y-8 mb-20">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Non sono un tuttofare.<br />
                  <span className="text-cyan-400">Sono uno che si adatta.</span>
                </h2>
                
                <div className="text-lg text-muted-foreground space-y-6 max-w-3xl leading-relaxed">
                  <p>
                    Studio Informatica all&apos;ITIS Max Planck di Villorba. Ma mentre a scuola imparo la teoria, 
                    fuori costruisco prodotti reali.
                  </p>
                  <p>
                    Questo mix mi rende diverso: ho le basi solide di chi studia, e la velocità di chi lavora sul campo. 
                    Non ho i tempi morti delle agenzie. Non ho i preventivi gonfiati dei freelance navigati. 
                    Ho fame, e la fame ti fa muovere.
                  </p>
                  <p>
                    Il mio approccio è semplice: tu mi porti un problema, io trovo il modo più pulito e veloce 
                    per risolverlo. Che sia un sito vetrina per il tuo locale, un sistema per gestire un inventario 
                    complesso, o qualcosa che non hai ancora capito come definire — ci arrivo.
                  </p>
                  <p className="text-foreground font-medium">
                    Non mi interessa fare mille progetti mediocri. Mi interessa fare pochi progetti fatti bene, 
                    con gente che capisce il valore di un lavoro fatto come si deve.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Method blocks */}
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              <StaggerItem>
                <Card className="p-6 bg-card/50 border-border/50 hover:border-cyan-500/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">01 — Ascolto</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Prima di scrivere una riga di codice, capisco cosa ti serve davvero. 
                    Non quello che pensi di volere — quello che risolve il problema.
                  </p>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card className="p-6 bg-card/50 border-border/50 hover:border-cyan-500/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Target className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">02 — Costruisco</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Niente template. Niente scorciatoie. Codice scritto da zero, 
                    ottimizzato per essere veloce oggi e scalabile domani.
                  </p>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card className="p-6 bg-card/50 border-border/50 hover:border-cyan-500/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Wrench className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">03 — Consegno</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deadline rispettate. Comunicazione costante. Quando dico che è pronto, 
                    è pronto — testato, deployato, funzionante.
                  </p>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Projects Section */}
        <section id="progetti" className="py-20 md:py-32 border-t border-border/50 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
                Su cosa sto lavorando
              </h2>
            </FadeIn>
            
            <div className="space-y-12">
              {/* Codex Venezia */}
              <FadeIn>
                <Card className="p-8 md:p-10 bg-card/50 border-border/50 hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold">Codex Venezia</h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
                          <Construction className="h-3 w-3" />
                          In sviluppo
                        </span>
                      </div>
                      <p className="text-muted-foreground">Sistema di Gestione Opere d&apos;Arte</p>
                    </div>
                  </div>
                  
                  <div className="text-muted-foreground space-y-4 leading-relaxed max-w-3xl">
                    <p>
                      Attualmente impegnato nella digitalizzazione e gestione d&apos;archivio per un importante artista veneziano.
                    </p>
                    <p>
                      Decenni di opere. Centinaia di pezzi tra venduti, esposti e in collezione privata. 
                      Un archivio fisico che stava diventando ingestibile.
                    </p>
                    <p>
                      Sto costruendo un sistema che trasforma quel caos in un database consultabile, 
                      filtrabile, aggiornabile da qualsiasi dispositivo. Non un sito vetrina — uno strumento di lavoro.
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground/60 mt-6 pt-6 border-t border-border/50">
                    Dettagli in arrivo.
                  </p>
                </Card>
              </FadeIn>
              
              {/* NoteBuddy */}
              <FadeIn delay={0.2}>
                <Card className="p-8 md:p-10 bg-card/50 border-border/50 hover:border-cyan-500/30 transition-all overflow-hidden">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl md:text-3xl font-bold">NoteBuddy</h3>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            Live
                          </span>
                        </div>
                        <p className="text-muted-foreground">Mind Mapping App · Side Project</p>
                      </div>
                      
                      <div className="text-muted-foreground space-y-4 leading-relaxed">
                        <p>
                          Un&apos;app di mind mapping che sto costruendo da zero. Trasforma idee sparse 
                          in mappe visuali interattive — il modo in cui organizzo i miei pensieri quando progetto.
                        </p>
                        <p>
                          È già live e funzionante, con nuove feature in arrivo: cloud sync e integrazione AI 
                          sono i prossimi step. Non è un progetto abbandonato — è un prodotto che evolve.
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Brain className="h-4 w-4 text-cyan-400" />
                          Mind mapping interattivo
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Save className="h-4 w-4 text-cyan-400" />
                          Salvataggio locale
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Palette className="h-4 w-4 text-cyan-400" />
                          UI pulita e veloce
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        asChild 
                        className="rounded-full border-border hover:border-cyan-500/50 hover:bg-cyan-500/5 w-fit"
                      >
                        <a href="https://notebuddy.software" target="_blank" rel="noopener noreferrer">
                          Provalo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    
                    <div className="lg:w-100 shrink-0">
                      <div className="rounded-xl overflow-hidden border border-border/50 bg-muted/30">
                        <Image 
                          src={notebuddyScreen} 
                          alt="NoteBuddy Screenshot" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contatti" className="py-20 md:py-32 border-t border-border/50">
          <div className="container mx-auto px-4 max-w-2xl">
            <FadeIn>
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Hai qualcosa in mente?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Scrivimi. Ti rispondo entro 24 ore con un parere onesto — 
                  se non sono la persona giusta per il tuo progetto, te lo dico subito.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Card className="p-8 bg-card/50 border-border/50">
                <form 
                  className="space-y-6" 
                  action="https://formsubmit.co/poretto.cristian07@gmail.com" 
                  method="POST"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nome</label>
                    <input 
                      id="name" 
                      name="name" 
                      required
                      className="flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 transition-all" 
                      placeholder="Il tuo nome" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      required
                      className="flex h-11 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 transition-all" 
                      placeholder="tu@esempio.it" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      className="flex min-h-30 w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 transition-all resize-none" 
                      placeholder="Descrivi il problema in 2 righe. Al resto ci pensiamo insieme." 
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full h-12 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all hover:glow-cyan-sm" 
                    size="lg"
                  >
                    Invia
                  </Button>
                </form>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-3">Oppure scrivimi direttamente</p>
                <a 
                  href="mailto:poretto.cristian07@gmail.com" 
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <Mail className="h-4 w-4" />
                  poretto.cristian07@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm flex flex-col items-center gap-4">
          <p>
            © {new Date().getFullYear()} Cristian Poretto · Mogliano Veneto, TV
          </p>
          <p className="text-xs">
            Risolvo problemi digitali per chi non ha tempo da perdere.
          </p>
          <CookiePolicy />
        </div>
      </footer>
    </div>
  );
}