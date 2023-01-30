import type { NextPage } from "next";
import Head from "next/head";
import TrippleCard from "../components/cards/TrippleCard";
import { goals } from "../data/goals";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code Mavricks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-linearPurple px-20 w-full">
        <section id="hero">
          <div className="container flex flex-col items-center justify-center pb-20  mx-auto space-y-0 md:space-y-0">
            <h1 className="font-sahitya text-primaryBlack md:text-6xl text-2xl w-3/4  md:leading-extra-loose leading-10 my-20 text-center capitalize">
              Welcome to our decentralized application for digital asset
              management
            </h1>
            <TrippleCard elements={goals}/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
