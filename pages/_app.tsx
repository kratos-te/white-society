import "../styles/globals.css";
import type { AppProps } from "next/app";
// import localFont from '@next/font/local'

//  const myFont = localFont({ src: '/public/font/FEASFBRG.TTF', variable: '--font-FeastOfFlesh' })
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    // <main className={`${myFont.variable}`}>
    // <Component {...pageProps} />
    // </main>
    <Component {...pageProps} />
  );
}
