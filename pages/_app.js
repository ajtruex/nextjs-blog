import "../styles/global.css"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "../lib/gtag"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZJ5BZMBEMM', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZJ5BZMBEMM`}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
