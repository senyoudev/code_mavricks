import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Head from "next/head";
import { nftsData } from "../data/nfts";
import MarketplaceCard from "../components/cards/MarketplaceCard";
import Table from "@nextui-org/react";
import TableNFT from "../components/cards/TableNFT";
export default function marketplace() {

  return (
    <>
    <Head>
      <title>Code Mavricks</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className=" min-h-screen flex flex-col">
      <main className="flex-grow px-20  justify-between">
        <TableNFT/>
        <div className="max-w-7xl">
          <h1 className="font-sahitya text-primaryBlack md:text-5xl text-2xl pl-10 lg:pl-32 md:leading-extra-loose  ">
          Notable Collections
          </h1>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-y-8">
          {nftsData.map((nft) => (
            <MarketplaceCard key={nft.NFTId} nft={nft} />
          ))}
        </div>
      </main>
    </div>
  </>
  );
}
