import "../styles/globals.css";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Inria_Serif, Maven_Pro } from "@next/font/google";
import Layout from "../components/layout/Layout";

const inria_serif = Inria_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--inria-serif",
});

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--mavin-pro",
});

function MyApp({ Component, pageProps }: any) {
  return (
    <main className={`${inria_serif.variable} ${maven_pro.variable}`}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </main>
  );
}

export default MyApp;
