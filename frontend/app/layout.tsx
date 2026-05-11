import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";
import { autoRepairJsonLd, organizationJsonLd, websiteJsonLd } from "@/data/seo";
import { siteConfig } from "@/data/business";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap"
});

const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-unbounded",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultTitle,
    template: "%s"
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url)
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F6F8"
};

function AnalyticsScripts() {
  const yandexId = siteConfig.analytics.yandexMetrikaId;
  const gaId = siteConfig.analytics.googleAnalyticsId;

  return (
    <>
      {yandexId ? (
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(${yandexId}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
          `}
        </Script>
      ) : null}
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>
        <JsonLd data={[autoRepairJsonLd(), organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
