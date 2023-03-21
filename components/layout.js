import Head from "next/head"
import Image from "next/image"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "Andrew Truex"
export const siteTitle = "Andrew Truex"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          src="https://cdn.counter.dev/script.js"
          data-id="29660159-2540-4921-b585-6cfaa524b9e6"
          data-utcoffset="-4"
        ></script>
        <script
          defer
          data-domain="andrewtruex.tech"
          src="https://plausible.io/js/script.js"
        ></script>
        <script
          async
          defer
          src="https://analytics.umami.is/script.js"
          data-website-id="a5c4825e-1010-488f-beb2-0afe23196e67"
        ></script>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2XL}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
