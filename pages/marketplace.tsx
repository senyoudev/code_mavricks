import Head from "next/head";
import MarketplaceCard from "../components/cards/MarketplaceCard";
import { useWeb3React } from "@web3-react/core";
import { useContract } from "../hooks/useContract";
import CodeMavricksNft from "../contracts/CodeMavricksNft.json";
import CodeMavericksMarketPlace from "../contracts/CodeMavericksMarketPlace.json";
import { useEffect, useState } from "react";
import { getNFTMetadata } from "../utils/getNftMetada";
import { SkeletonLoader } from "../components/Loaders/SkeletonLoader";
import { toast } from "react-toastify";

const GAS_Amount = 3000000;

export default function marketplace() {
  const { account, chainId } = useWeb3React();
  const { contract: nftContract } = useContract(CodeMavricksNft);
  const { contract: marketplaceContract } = useContract(
    CodeMavericksMarketPlace
  );
  const [nftMetadata, setNftMetadata] = useState<
    Array<{
      nftId: string | number;
      metadata: Object;
      price: string | number;
      owner: string;
    }>
  >([]);

  const [isLoading, setLoading] = useState(true);

  async function buyNFT(tokenId: string | number, price: string | number) {
    try {
      const tx = await marketplaceContract?.methods.buyNFT(tokenId).send({
        from: account,
        value: price,
        gas: GAS_Amount,
      });
      console.log("Purchase transaction:", tx);
      // Handle success or update UI accordingly
      toast.success("Nft purchased succesffully");
    } catch (error) {
      console.error("Error buying NFT:", error);
      // Handle error or display error message
    }
  }

  async function getInfos() {
    try {
      let nftsForSales = await marketplaceContract?.methods
        ?.getNFTsForSale()
        ?.call();

      if (nftsForSales) {
        // Retrieve metadata for each NFT
        const metadataPromises = nftsForSales.map(
          async (nftId: string | number) => {
            const ipfsUrl = await nftContract?.methods.tokenURI(nftId).call();
            const price = await marketplaceContract?.methods
              .getNFTPrice(nftId)
              .call();
            const owner = await nftContract?.methods.ownerOf(nftId).call(); // Get the owner's address

            const metadata = await getNFTMetadata(ipfsUrl);
            return {
              nftId,
              metadata,
              price,
              owner,
            };
          }
        );

        // Wait for all metadata promises to resolve
        const nftMetadata = await Promise.all(metadataPromises);
        // Store the NFT metadata in the state
        setNftMetadata(nftMetadata);
      }
    } catch (error) {
      console.error("Error retrieving NFT metadata:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // This code will only run on the client-side
    // if (!account) {
    //   router.push("/");
    // }

    getInfos();
  }, [account, nftContract, marketplaceContract]);

  return (
    <>
      <Head>
        <title>Code Mavricks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" min-h-screen flex flex-col">
        <main className="flex-grow px-20 justify-between">
          {/* <TableNFT /> */}
          <div className="max-w-7xl">
            <h1 className="font-sahitya text-primaryBlack md:text-5xl text-2xl pl-10 lg:pl-32 md:leading-extra-loose  ">
              Recent Nfts For Sales
            </h1>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col gap-y-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <>
                  {nftMetadata.map((nft) => (
                    <div key={nft.nftId} className="p-4">
                      <MarketplaceCard nftData={nft} buyNFT={buyNFT} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
