import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import ProposalIntroCard from "../../components/cards/ProposalIntroCard";
import ProposalCard from "../../components/cards/ProposalCard";
import { proposalsData } from "../../data/proposals";
import CodeMavericksGouvernance from "../../contracts/CodeMavericksGouvernance.json";
import { useContract } from "../../hooks/useContract";
import { TOKEN_SYMBOL_MAP } from "../../data/tokensInfos";

function proposals() {
  const [daoBalance, setDaoBalance] = useState(0);
  const [symbol, setSymbol] = useState("Eth");
  const [proposals,setProposals] = useState([])
  const { account, chainId } = useWeb3React();
  const { contract } = useContract(CodeMavericksGouvernance);

  const router = useRouter();

  useEffect(() => {
    // This code will only run on the client-side
    // if (!account) {
    //   router.push("/");
    // }

    async function getInfos() {
      let balance = await contract?.methods?.getDaoBalance().call();
      let props = await contract?.methods?.getProposals().call();
      setProposals(props)
      setDaoBalance(balance);
      const tokenSymbol = TOKEN_SYMBOL_MAP[chainId!];
      setSymbol(tokenSymbol);
      console.log("proposals",props)
    }
    getInfos();
  }, [account, contract, chainId]);

  return (
    <>
      <Head>
        <title>Code Mavricks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" min-h-screen flex flex-col">
        <main className="flex-grow p-6  justify-between">
          <ProposalIntroCard balance={daoBalance} tokenSymbol={symbol} />
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
