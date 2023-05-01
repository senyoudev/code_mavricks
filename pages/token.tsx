import Head from "next/head";
import TokenPurchaseCard from "../components/cards/TokenPurchaseCard";

function token() {
  const myToken = {
    name: "CodeMavericks",
    symbol: "CVM",
    icon: "/mytoken-icon.png",
  };
  const price = 0.1; // 1 MTK = 0.1 ETH

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
