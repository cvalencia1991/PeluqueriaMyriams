import { AppProps } from "next/app"
import { avenir, timesNewRoman } from "../fonts"

export default function MyApp({ Component, pageProps } : AppProps) { 
  return (
    <main className={`${avenir.className} ${timesNewRoman.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
