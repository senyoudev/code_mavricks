import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import ProposalIntroCard from "../components/cards/ProposalIntroCard";

function proposals() {
  const { account } = useWeb3React();

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
      <div className=" min-h-screen flex flex-col">
        <main className="flex-grow p-6">
          <ProposalIntroCard />
        </main>
      
      </div>
    </>
  );
}

export default proposals;
