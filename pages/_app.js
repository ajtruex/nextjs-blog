import "../styles/global.css"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'G-4MMPD7N3L5');
          `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
