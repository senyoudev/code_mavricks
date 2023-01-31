import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/cards/Card";
import TrippleCard from "../components/cards/TrippleCard";
import { goals } from "../data/goals";
import { Community } from "../data/Community";
import { Reasons } from "../data/Reasons";


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
            <TrippleCard elements={goals} />
          </div>
        </section>

        <section id="Why">
          <div className="container flex flex-col pb-20 mx-auto space-y-0 md:space-y-0">
            <h1 className="font-sahitya text-primaryBlack md:text-5xl text-2xl pl-10 md:leading-extra-loose leading-10 my-20 ">
              Why MAVERICKS DAO ?
            </h1>
            <Card />
          </div>
        </section>

        <section id="hero">
          <div className="container flex flex-col items-center justify-center pb-20  mx-auto space-y-0 md:space-y-0">
            <h1 className="font-sahitya text-primaryBlack md:text-6xl text-2xl w-3/4  md:leading-extra-loose leading-10 my-20 text-center capitalize">
              Our DAO Aims To Educate 1 Million Developers On The Benefits of
              Open Economy And Seamless Cooperation.
            </h1>
            <TrippleCard elements={Community} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
