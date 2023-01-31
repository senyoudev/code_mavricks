import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/cards/Card";
import TrippleCard from "../components/cards/TrippleCard";
import { goals } from "../data/goals";
import { Community } from "../data/Community";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code Mavricks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-linearPurple md:px-20 px-5 w-full">
        <section id="plateform">
          <div className="container flex flex-col items-center justify-center mx-auto space-y-0 md:space-y-0">
            <h1 className="font-sahitya text-primaryBlack md:text-6xl text-2xl w-3/4  md:leading-extra-loose leading-10 md:my-20 my-10 text-center capitalize">
              Welcome to our decentralized application for digital asset
              management
            </h1>
            <TrippleCard elements={goals} />
          </div>
        </section>

        <section id="why">
          <div className="container flex flex-col mx-auto space-y-0 md:space-y-0">
            <h1 className="font-sahitya text-primaryBlack md:text-5xl text-2xl pl-10 md:leading-extra-loose leading-10 my-20 ">
              Why MAVERICKS DAO ?
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-4 lg:space-y-0">
              <div className="py-6  lg:w-3/4 lg:h-2/3   flex flex-col items-center  justify-around bg-linearPurple  shadow-3xl border-2 border-solid border-secondaryPurple items-center  rounded ">
                <h3 className="font-sahitya text-blackPurple text-xl font-bold mb-4  capitalize">
                  codeMavericks
                </h3>
                <p className="font-maven-pro text-primaryBlack w-3/4  leading-8  capitalize">
                  CodeMavricks Dao aims to train 1m web3 Developper. The DAO
                  could be structured in a way that allows community members to
                  contribute resources, Code Mavricks Dao aims to train 1m web3
                  Developper. The DAO could be structured in a way that allows
                  community members to contribute resources, expertise, and
                  ideas to the training program.
                </p>
              </div>
              <div className="py-4 px-2 lg:w-1/4 h-full  flex flex-col items-center  justify-around bg-linearPurple  shadow-3xl border-2 border-solid border-secondaryPurple items-center  rounded">
                <h3 className="font-sahitya text-blackPurple text-xl mb-4 font-bold text-center capitalize">
                  Lorem ipsum
                </h3>
                <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
                  Plurality voting: In this system, each member gets one vote
                  and the option with the most votes wins. Plurality voting: In
                  this system, each member gets one vote and the option with the
                  most votes wins. Plurality voting: In this system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="community">
          <div className="container flex flex-col items-center justify-center pb-20  mx-auto space-y-0 md:space-y-0">
            <h1 className="font-sahitya text-primaryBlack md:text-6xl text-2xl w-3/4  md:leading-extra-loose leading-10 md:my-20 my-10 text-center capitalize">
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
