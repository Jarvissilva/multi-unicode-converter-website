import "app/style.css";
import Script from "next/script";
import { poppins } from "app/fonts";
import Footer from "components/footer";

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "qfE0Jsr0dghRMTvE9Hkkx83Rz2rRS6619sI3kQmndeQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TF57SQQKSL"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TF57SQQKSL');
        `}
        </Script>
        <main className="px-[clamp(1.25rem,5vw,5rem)] lg:px-[clamp(3rem,14vw,12rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
