import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { Pizza, Store, Smartphone, Globe, CheckCircle, ArrowRight, Utensils, MapPin, Calendar } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import Image from "next/image";
import codingImage from "../public/coding.jpg"
import notebuddyScreen from "../public/notebuddy-screen.png"
import { StatCounter } from "@/components/stat-counter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md">PC</span>
            <span className="hidden sm:inline-block">Soluzioni Web</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Chi Sono
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Servizi
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-red-500 transition-colors">
              Portfolio
            </Link>
            <Link href="#process" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Processo
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contatti
            </Link>
            <ModeToggle />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            {/* Mobile menu button would go here */}
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
          
          <div className="container px-4 space-y-6">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                Sviluppo Web & Soluzioni Digitali
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto">
                Porto la Qualità del Software Moderno nel <span className="text-blue-600">Tuo Business Locale</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dalle applicazioni web complesse ai siti vetrina: tecnologie all'avanguardia per far crescere la tua attività.
              </p>
            </FadeIn>
            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="rounded-full text-lg h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="#contact">
                    Richiedi Preventivo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full text-lg h-12 px-8 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/20">
                  <Link href="#portfolio">
                    Vedi Esempi
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section (Chi Sono) */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-square relative rounded-2xl overflow-hidden bg-muted flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                    <Image src={codingImage} alt="Cristian Poretto" className="object-cover w-full h-full" />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Chi Sono
                  </h2>
                  <div className="text-lg text-muted-foreground space-y-4">
                    <p>
                      Ciao! Sono Cristian, uno studente dell'ITIS Max Planck di Villorba con la passione per le tecnologie digitali e la programmazione web
                      Il mio obiettivo è semplice: aiutare le attività locali a competere nel mondo moderno attraverso strumenti web efficaci e professionali.
                    </p>
                    <p>
                      A differenza delle grandi agenzie, offro un approccio diretto e personale. 
                      Seguo ogni progetto dalla prima stretta di mano fino alla messa online (e oltre), garantendo che ogni dettaglio rispecchi la tua visione.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-muted/30 p-4 rounded-lg border">
                      <span className="font-bold block text-lg text-foreground">Affidabilità</span>
                      <span className="text-sm text-muted-foreground">Supporto continuo</span>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border">
                      <span className="font-bold block text-lg text-foreground">Qualità</span>
                      <span className="text-sm text-muted-foreground">Codice moderno</span>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border">
                      <span className="font-bold block text-lg text-foreground">Comunicazione</span>
                      <span className="text-sm text-muted-foreground">Risposte rapide</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Soluzioni Su Misura per la Tua Attività</h2>
                <p className="text-lg text-muted-foreground">
                  Non creo solo siti web; costruisco strumenti che aiutano la tua attività a funzionare meglio e crescere più velocemente.
                </p>
              </div>
            </FadeIn>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <StaggerItem>
                <Card className="bg-background border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-red-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4 text-red-600">
                      <Utensils className="h-6 w-6" />
                    </div>
                    <CardTitle>Siti per Ristoranti e Pizzerie</CardTitle>
                    <CardDescription>Perfetto per attività di ristorazione</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-red-500" /> Integrazione Menu Digitale</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-red-500" /> Sistemi di Prenotazione Online</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-red-500" /> Design Mobile-First</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-red-500" /> Menu con QR Code</li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="bg-background border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-yellow-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                      <Store className="h-6 w-6" />
                    </div>
                    <CardTitle>Presenza Locale</CardTitle>
                    <CardDescription>Per negozi, saloni e servizi</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-500" /> Integrazione Google Maps</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-500" /> Vetrina Servizi</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-500" /> Moduli di Contatto e Prenotazione</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-500" /> Widget Recensioni</li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="bg-background border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4 text-green-600">
                      <Globe className="h-6 w-6" />
                    </div>
                    <CardTitle>SEO e Performance</CardTitle>
                    <CardDescription>Fatti trovare dai clienti locali</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Ottimizzazione SEO Locale</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Caricamento Ultra Veloce</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Configurazione Google Business</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Analisi e Reportistica</li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Progetti in Evidenza</h2>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Project 1 - NoteBuddy */}
              <StaggerItem>
                <div className="group relative bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-indigo-500/50">
                  <div className="h-64 bg-indigo-50 dark:bg-indigo-900/10 w-full flex items-center justify-center text-indigo-300 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <Image src={notebuddyScreen} alt="NoteBuddy Screenshot" className="object-cover w-full h-full" />
                  </div>
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-indigo-600 transition-colors">NoteBuddy</h3>
                        <p className="text-muted-foreground text-sm">SaaS Platform</p>
                      </div>
                      <Button variant="secondary" size="sm" className="rounded-full hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30" asChild>
                        <a href="https://notebuddy.software" target="_blank" rel="noopener noreferrer">Visita Sito</a>
                      </Button>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      Una piattaforma avanzata per la gestione degli appunti. Dimostra la capacità di costruire applicazioni web complesse, veloci e scalabili che vanno oltre il semplice sito vetrina.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-xs font-medium rounded-full">Next.js</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-xs font-medium rounded-full">Full Stack</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-xs font-medium rounded-full">AI Integration</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 text-xs font-medium rounded-full">Demo</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Progetto personale a scopo dimostrativo.
                    </p>
                  </div>
                </div>
              </StaggerItem>
              {/* Project 2 - Local Business Concept */}
              <StaggerItem>
                <div className="group relative bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-red-500/50">
                  <div className="h-64 bg-red-50 dark:bg-red-900/10 w-full flex items-center justify-center text-red-300 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <div className="text-center">
                      <Pizza className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <span className="text-sm font-medium">Demo Ristorazione</span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-red-600 transition-colors">Ristorante Locale</h3>
                        <p className="text-muted-foreground text-sm">Concept Demo</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      Un esempio concreto di come trasformo un'attività locale in un brand digitale. Menu interattivi, prenotazioni online e design ottimizzato per convertire i visitatori in clienti.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-medium rounded-full">Prenotazioni</span>
                      <span className="px-3 py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-medium rounded-full">Menu Digitale</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Demo dimostrativa, non sito di un cliente reale.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-muted/20 border-y">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-bold text-center">
              Risultati concreti per attività locali
            </h2>

            <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
              Il mio obiettivo non è solo creare un sito bello, ma portare più
              clienti reali al tuo business.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
              <StatCounter
                value={35}
                suffix="%"
                label="Prenotazioni online in più"
              />

              <StatCounter
                value={25}
                suffix="+"
                label="Contatti medi al mese"
              />

              <StatCounter
                value={50}
                suffix="%"
                label="Tempo risparmiato nella gestione"
              />
            </div>

            <p className="mt-10 text-center text-xs text-muted-foreground">
              * Risultati medi basati su siti ottimizzati per SEO locale e conversione.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-xl mx-auto text-center space-y-8 px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold">Pronto a Far Crescere la Tua Attività?</h2>
              <p className="text-muted-foreground text-lg">
                Parliamo di come un sito professionale può aiutarti ad avere più clienti. 
                Nessuna pressione, solo una chiacchierata amichevole sui tuoi obiettivi.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Card className="p-6 text-left border-t-4 border-t-blue-600 shadow-lg">
                <form className="space-y-4" action="https://formsubmit.co/poretto.cristian07@gmail.com" method="POST">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nome</label>
                      <input id="name" name="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Mario Rossi" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-medium">Nome Attività</label>
                      <input id="business" name="business" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Pizzeria da Mario" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" type="email" name="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="mario@esempio.it" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Come posso aiutarti?</label>
                    <textarea id="message" name="message" className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Ho bisogno di un sito per il mio ristorante..." />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">Invia Messaggio</Button>
                </form>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="pt-8">
                <p className="text-sm text-muted-foreground">
                  O scrivimi direttamente a <a href="mailto:poretto.cristian07@gmail.com" className="text-blue-600 hover:underline">poretto.cristian07@gmail.com</a>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t mt-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Poretto Cristian. Aiuto le attività locali a prosperare online.</p>
        </div>
      </footer>
    </div>
  );
}