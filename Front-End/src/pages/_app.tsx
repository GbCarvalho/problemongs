import { AppProps } from "next/app";
import { Header } from "../components/Header/Index";
import { Footer } from "../components/Footer";

import "react-toastify/dist/inject-style";

import { ToastContainer, toast } from "react-toastify";

import { Provider as NextAuthProvider } from "next-auth/client";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  toast.configure();
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} style={{ overflowX: "hidden" }} />
      <Footer />
      <ToastContainer autoClose={3000} />
    </NextAuthProvider>
  );
}

export default MyApp;
