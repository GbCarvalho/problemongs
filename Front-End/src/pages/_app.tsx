import { AppProps } from "next/app";
import { Header } from "../components/Header/Index";
import { Footer } from "../components/Footer";

import { Provider as NextAuthProvider } from "next-auth/client";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} style={{ overflowX: 'hidden' }} />
      <Footer />
    </NextAuthProvider>
  );
}

export default MyApp;