import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import ProposalIntroCard from "../../components/cards/ProposalIntroCard";
import ProposalCard from "../../components/cards/ProposalCard";
import { proposalsData } from "../../data/proposals";

function proposals() {
  const { account } = useWeb3React();

  const router = useRouter();

  //   useEffect(() => {
  //     // This code will only run on the client-side
  //     if (!account) {
  //       router.push("/");
  //     }
  //   }, [account]);

  return (
    <>
      <Head>
        <title>Code Mavricks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" min-h-screen flex flex-col">
        <main className="flex-grow p-6  justify-between">
          <ProposalIntroCard />
          <div className="max-w-7xl">
            <h1 className="font-sahitya text-primaryBlack md:text-5xl text-2xl pl-10 lg:pl-32 md:leading-extra-loose  ">
              Proposals
            </h1>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col gap-y-8">
            {proposalsData.map((proposal) => (
              <ProposalCard key={proposal.proposalId} proposal={proposal} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default proposals;
