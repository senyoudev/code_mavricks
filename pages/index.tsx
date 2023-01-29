import type { NextPage } from "next";
import Head from "next/head";
import TrippleCard from "../components/cards/TrippleCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code Mavricks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-linearPurple px-20 w-full">
        <section id="hero">
          <div className="container flex flex-col items-center justify-center  mx-auto space-y-0 md:space-y-0">
            <h1 className="font-sahitya text-primaryBlack text-6xl w-3/4  leading-extra-loose my-20 text-center capitalize">
              Welcome to our decentralized application for digital asset
              management
            </h1>
            <TrippleCard/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
