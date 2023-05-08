import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import ProposalIntroCard from "../../components/cards/ProposalIntroCard";
import ProposalCard from "../../components/cards/ProposalCard";
import CodeMavericksGouvernance from "../../contracts/CodeMavericksGouvernance.json";
import { useContract } from "../../hooks/useContract";
import { TOKEN_SYMBOL_MAP } from "../../data/tokensInfos";
import { Proposal } from "../../interfaces/Proposal";
import { toast } from "react-toastify";

function proposals() {
  const [daoBalance, setDaoBalance] = useState(0);
  const [symbol, setSymbol] = useState("Eth");
  const [proposals, setProposals] = useState([]);
  const { account, chainId } = useWeb3React();
  const { contract } = useContract(CodeMavericksGouvernance);

  const router = useRouter();
  const GAS_AMOUNT = 300000;

  useEffect(() => {
    // This code will only run on the client-side
    // if (!account) {
    //   router.push("/");
    // }

    async function getInfos() {
      let balance = await contract?.methods?.getDaoBalance().call();
      let data = await contract?.methods?.getProposals().call();
      const parsedProposals = data?.map(
        (item: any): Proposal => ({
          proposalId: item[0],
          title: item[6],
          description: item[7],
          forVotes: item[4].toString(),
          againstVotes: item[5].toString(),
          votingPassed: item[8],
          paid: item[10],
          timeRemaining: item[3],
        })
      );
      setProposals(parsedProposals);
      setDaoBalance(balance);
      const tokenSymbol = TOKEN_SYMBOL_MAP[chainId!];
      setSymbol(tokenSymbol);
      console.log("proposals", parsedProposals);
    }
    getInfos();
  }, [account, contract, chainId]);

  const voteFor = async (proposalId: String | number) => {
    try {
      const res = await contract?.methods
        .voteWithToken(proposalId, true)
        .send({ from: account, gas: GAS_AMOUNT });
      console.log(res);
      // If no errors or exceptions, display a success message
      toast.success("Your vote was successfully cast.");
    } catch (error) {
      console.error(error);
      // If there's an error or exception, display an error message
      toast.error(
        "Sorry, there was an error casting your vote.either you already vote or you dont have the right to do it"
      );
    }
  };

  const voteAgainst = async (proposalId: String | number) => {
    try {
      const res = await contract?.methods
        .voteWithToken(proposalId, false)
        .send({ from: account, gas: GAS_AMOUNT });
      console.log(res);
      // If no errors or exceptions, display a success message
      toast.success("Your vote was successfully cast.");
    } catch (error) {
      console.error(error);
      // If there's an error or exception, display an error message
      toast.error(
        "Sorry, there was an error casting your vote.either you already vote or you dont have the right to do it"
      );
    }
  };

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
            {proposals?.map((proposal) => (
              <ProposalCard
                key={proposal?.proposalId}
                proposal={proposal}
                voteFor={voteFor}
                voteAgainst={voteAgainst}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default proposals;
