import type { AppProps } from "next/app";

import "../styles.css";

export default function LibraMindApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

