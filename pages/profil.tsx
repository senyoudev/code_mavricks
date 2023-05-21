import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import useBalance from "../hooks/useBalance";
import Image from "next/image";
import { useRouter } from "next/router";

import { useContract } from "../hooks/useContract";
import CodeMavricksNft from "../contracts/CodeMavricksNft.json";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { getNFTMetadata } from "../utils/getNftMetada";
import { SkeletonLoader } from "../components/Loaders/SkeletonLoader";
import { toast } from "react-toastify";

const GAS_Amount = 3000000;

const profil = () => {
  const { account } = useWeb3React();
  const { contract } = useContract(CodeMavricksNft);
  const [isLoading, setLoading] = useState(true);
  const [loading, setLoadingBtn] = useState(false);
  const [userBalance, setUserBalance] = useState(0);
  const [image, setImage] = useState<String | null>("");
  const [desc, setDesc] = useState<String | null>("");
  const [contributions, setContributions] = useState([]);
  const balance = useBalance();
  const accountLength = account?.length;

  const router = useRouter();

  const getUserNft = async () => {
    const balance = await contract?.methods.balanceOf(account).call();
    if (balance != 0) {
      const tokenId = await contract?.methods
        .tokenOfOwnerByIndex(account, 0)
        .call();
      const contribs = await contract?.methods
        .getNFTContributions(account)
        .call();
      setContributions(contribs);
      const ipfsUrl = await contract?.methods.tokenURI(tokenId).call();
      const data = await getNFTMetadata(ipfsUrl);
      if (data != undefined) {
        setDesc(data.description);
        setImage(data.image);
      }
    } else {
      setImage("/assets/images/R.jpg");
      setDesc(
        "Lorem ipsum dolor sit amet consectetur. Volutpat pellentesque purus et at. Mi volutpat rhoncus non rutrum risus. Urna egestas blandit lectus ac risus. Malesuada eros in elit sed nunc ultrices. Magna facilisis amet nibh bibendum. Tellus eget eget quam at platea et. Vulputate tincidunt faucibus aliquet velit sed massa augue cras."
      );
    }
    setUserBalance(balance);
    setLoading(false);
  };

const mintNFT = async () => {
  setLoadingBtn(true);
  try {
    if (userBalance == 0) {
      console.log("here")
      await contract?.methods
        .mint(account)
        .send({ from: account, gas: GAS_Amount });
      toast.success("Nft is minted successfully")
    } else {
      toast.error("User already has an NFT");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoadingBtn(false);
  }
};

  useEffect(() => {
    // This code will only run on the client-side
    // if (!account) {
    //   router.push("/");
    // }
    getUserNft();
  }, [account, router, userBalance, contract]);

  return (
    <div className="bg-linearPurple md:px-70 py-16 w-full flex items-center justify-center">
      <div
        className="container mx-auto px-10 py-6 flex flex-col justify-around items-center bg-linearPurple shadow-3xl border-2 border-solid border-secondaryPurple rounded"
        style={{ maxWidth: "1440px" }}
      >
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="col-span-1 flex items-center justify-center">
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <Image
                src={image != null ? image.toString() : "/assets/images/R.jpg"}
                alt="profile image"
                width={150}
                height={150}
                className="rounded-full h-16 w-16 lg:h-32 lg:w-32 border-4 border-white"
              />
            )}
          </div>

          <div className="col-span-1 md:col-span-2 flex items-center justify-center ">
            <div className="flex items-center">
              <div className="flex flex-col ml-2">
                <p
                  style={{
                    fontFamily: "'Sahitya', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "30px",
                    lineHeight: "47px",
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                    color: "#340072",
                  }}
                >
                  {balance}
                </p>
                <p className="font-maven-pro font-normal font-bold text-purple-600 text-base leading-5 flex items-center capitalize">
                  {`${String(account).substring(0, 7)}` +
                    "..." +
                    `${String(account).substring(
                      accountLength! - 4,
                      accountLength
                    )}`}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex items-center justify-center ">
            {userBalance != 0 ? (
              <Link
                href="/proposals/create"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-2 border-2 border-solid border-purple-900 shadow-lg px-4 py-2"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(225, 209, 244, 0) 0%, rgba(225, 209, 244, 0.2) 100%)",
                  borderRadius: "5px",
                }}
              >
                <span className="font-mavenPro font-normal text-lg capitalize text-blackPurple flex items-center">
                  + New Proposal
                </span>
              </Link>
            ) : (
              <Button
                onClick={() => mintNFT()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-2 border-2 border-solid border-purple-900 shadow-lg px-4 py-2"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(225, 209, 244, 0) 0%, rgba(225, 209, 244, 0.2) 100%)",
                  borderRadius: "5px",
                }}
              >
                {loading ? (
                  <>
                    <svg
                      role="status"
                      className="inline w-5 h-5 mr-2 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Minting...
                  </>
                ) : (
                  <span className="font-mavenPro font-normal text-lg capitalize text-blackPurple flex items-center">
                    Mint Nft
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-around">
          <div className="flex flex-col items-center justify-around lg:w-1/5">
            <p className="p-8 font-sahitya font-bold text-2xl leading-10 flex items-center capitalize text-purple-800">
              About your NFT
            </p>
          </div>
          <div className="flex flex-col justify-around lg:w-4/5 lg:pl-8">
            <p className="font-maven-pro font-normal text-base leading-6 flex items-center text-primary-black">
              {desc}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-around py-5">
          <div className="flex flex-col items-center justify-around lg:w-1/5">
            <p className="p-8 font-sahitya font-bold text-2xl leading-10 flex items-center  text-left capitalize text-purple-800">
              Your Contributions
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start -mx-2">
            {contributions?.map((contrib, idx) => (
              <div key={idx} className="w-full lg:w-1/2 px-2 mb-4">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-700 shadow-md rounded-md px-4 py-6">
                  <p className="font-sahitya font-bold text-lg leading-6 capitalize text-purple-900">
                    Contribution N{idx + 1}
                  </p>
                  <p className="font-maven-pro font-normal text-base leading-6 text-primary-black mt-2">
                    {contrib}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default profil;
