import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristian Poretto | Sviluppatore Web · Problem Solver",
  description: "Hai un problema digitale? Ho la soluzione. Siti, sistemi, automazioni — se è codice, lo scrivo. Mogliano Veneto, Treviso.",
  keywords: ["sviluppatore web", "web agency", "problem solver", "automazioni", "Mogliano Veneto", "Treviso", "siti web", "soluzioni digitali"],
  authors: [{ name: "Cristian Poretto", url: "https://www.porettocristian.it" }],
  openGraph: {
    title: "Cristian Poretto | Sviluppatore Web · Problem Solver",
    description: "Hai un problema digitale? Ho la soluzione. Siti, sistemi, automazioni — se è codice, lo scrivo.",
    url: "https://www.porettocristian.it",
    siteName: "Cristian Poretto Web Agency",
    images: [
      {
        url: "/coding.jpg",
        width: 1200,
        height: 630,
        alt: "Cristian Poretto Coding",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Poretto | Sviluppatore Web · Problem Solver",
    description: "Hai un problema digitale? Ho la soluzione. Siti, sistemi, automazioni — se è codice, lo scrivo.",
    images: ["/coding.jpg"],
    creator: "@cristianporetto",
  },
  metadataBase: new URL("https://www.porettocristian.it"),
  alternates: {
    canonical: "https://www.porettocristian.it",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Cristian Poretto" />
        <meta name="keywords" content="sviluppatore web, web agency, problem solver, automazioni, Mogliano Veneto, Treviso, siti web, soluzioni digitali" />
        <link rel="canonical" href="https://www.porettocristian.it" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
