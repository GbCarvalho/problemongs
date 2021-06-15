import { AppProps } from "next/app";
import { Header } from "../components/Header/Index";
import { Footer } from "../components/Footer";
import { Main } from "./../components/Main";
import { Provider as NextAuthProvider } from "next-auth/client";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <div className="pageContent">
        <Header />
        <Main />
        <Footer />
      </div>
    </NextAuthProvider>
  );
}

export default MyApp;
