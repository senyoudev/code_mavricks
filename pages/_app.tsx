import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Inria_Serif, Maven_Pro, Sahitya } from "@next/font/google";
import Layout from "../components/layout/Layout";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { done, start } from "nprogress";
import { Router } from "next/router";



const inria_serif = Inria_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--inria-serif",
});

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--maven-pro",
});

const sahitya = Sahitya({
  subsets: ["latin"],
  weight: "400",
  variable: "--sahitya",
});

function MyApp({ Component, pageProps }: any) {
   Router.events.on("routeChangeStart", () => start());
   Router.events.on("routeChangeComplete", () => done());
   Router.events.on("routeChangeError", () => done());
  return (
    <Web3ReactProvider
      getLibrary={(provider: any) => new Web3Provider(provider)}
    >
      <main
        className={`${inria_serif.variable} ${maven_pro.variable} ${sahitya.variable}`}
      >
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </main>
    </Web3ReactProvider>
  );
}

export default MyApp;
