import Head from "next/head";
import TokenPurchaseCard from "../components/cards/TokenPurchaseCard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

function token() {
    const { account } = useWeb3React();

  const myToken = {
    name: "CodeMavericks",
    symbol: "CVM",
    icon: "/mytoken-icon.png",
  };
  const price = 0.1; // 1 MTK = 0.1 ETH

  const router = useRouter();

  useEffect(() => {
    // This code will only run on the client-side
    if (!account) {
      router.push("/");
    }
  }, [account, router]);

  return (
    <>
      <Head>
        <title>Code Mavricks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-linearPurple md:px-40 px-5 w-full">
        <TokenPurchaseCard token={myToken} price={price} />
      </div>
    </>
  );
}

export default token;
