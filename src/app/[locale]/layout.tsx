import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider"
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import "@/styles/globals.css";
import { TheHeader } from "@/components/TheHeader";
import Contact from "@/components/Contact";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import SmoothScrolling from "@/components/SmoothScrolling";


export const metadata: Metadata = {
  title: "Peluqueria Miryam's",
  description: "the best hair salon in the city of Cali, Colombia",
};

type Locale = "en" | "es";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages(); 

  return (
    <html suppressHydrationWarning={true}lang={locale} >
      <head />
      <body suppressHydrationWarning={true}
        className="antialiased">
        <TheHeader />
        <CookieConsentBanner />
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}>
            <NextIntlClientProvider messages={messages}>
              <SmoothScrolling>
                {children}
              </SmoothScrolling>
            </NextIntlClientProvider>
          </ThemeProvider>
        </main>
        <Contact/>
      </body>
    </html>
  );
}

