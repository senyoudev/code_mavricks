import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import ProposalIntroCard from "../../components/cards/ProposalIntroCard";
import ProposalCard from "../../components/cards/ProposalCard";
import { proposalsData } from "../../data/proposals";
import CodeMavricksNft from "../../contracts/CodeMavricksNft.json";
import { useContract } from "../../hooks/useContract";
import { GetServerSideProps } from "next";

function proposals() {
  const { account } = useWeb3React();
      const { contract } = useContract(CodeMavricksNft);
      console.log("we are here");
      console.log("contract", contract);
      
  const router = useRouter();

  useEffect(() => {
    // This code will only run on the client-side
    // if (!account) {
    //   router.push("/");
    // }
    async function getBaseUri() {
      let baseUri = await contract?.methods?.baseURI().call();
      console.log("baseUri", baseUri);
    }
    getBaseUri()
  }, [account,contract]);

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

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   let baseUri: any;
//   try {
//     // get plans
//     const { contract } = useContract(CodeMavricksNft);
//     console.log("we are here");
//     console.log("contract", contract);
//     baseUri = await contract?.methods?._baseURI().call();

//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     props: {
//       baseUri,
//     },
//   };
// };

export default proposals;
