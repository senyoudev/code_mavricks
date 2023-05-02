import React from "react";
import { useWeb3React } from "@web3-react/core";
import useBalance from "../hooks/useBalance";

  
const Profil = () => {
  const { account, deactivate } = useWeb3React();
  const balance = useBalance();
  const accountLength = String(account).length;
  return (
    <div className="bg-linearPurple md:px-70 py-16 w-full flex items-center justify-center">
<div className="container px-10 py-6 flex flex-col justify-around items-center bg-linearPurple shadow-3xl border-2 border-solid border-secondaryPurple rounded"
  style={{
    border: "5px solid #1A0532",
    boxShadow: "4px 4px 0px #1A0532",
    borderRadius: "50px 10px 10px 10px",
    maxWidth: "1400px",
    margin: "0 auto"
  }}
>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
  <div className="col-span-1 flex items-center justify-center" >
    <img
      src="/assets/images/R.jpg"
      alt="your-image"
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        border: "5px solid #FFFFFF"
      }}
    />
  </div>

  <div className="col-span-1 md:col-span-2 flex " style={{padding: "40px 70px"}}>
<div className="flex items-center">
  <div className="flex flex-col ml-2">
    <p style={{
      fontFamily: "'Sahitya', sans-serif",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "47px",
      display: "flex",
      alignItems: "center",
      textTransform: "capitalize",
      color: "#340072"
    }}>
      {balance}
    </p>
    <p className="font-maven-pro font-normal font-bold text-purple-600 text-base leading-5 flex items-center capitalize">
      {String(account)}
    </p>
  </div>
</div>

  </div>

  <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center " style={{padding: "30px"}}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-2 border-2 border-solid border-purple-900 shadow-lg px-4 py-2" style={{background: "linear-gradient(180deg, rgba(225, 209, 244, 0) 0%, rgba(225, 209, 244, 0.2) 100%)", borderRadius: "5px"}}>
      <span className="font-mavenPro font-normal font-semibold text-lg capitalize text-blackPurple flex items-center">
        + New Proposal
      </span>
    </button>
  </div>
</div>



<div className="flex flex-col lg:flex-row w-full lg:w-auto justify-around">
  <div className="flex flex-col items-center justify-around lg:w-1/5">
    <p className="p-8 font-sahitya font-bold text-2xl leading-10 flex items-center capitalize text-purple-800">About your NFT</p>
  </div>
  <div className="flex flex-col justify-around lg:w-4/5 lg:pl-8">
    <p className="font-maven-pro font-normal text-base leading-6 flex items-center text-primary-black">Lorem ipsum dolor sit amet consectetur. Volutpat pellentesque purus et at. Mi volutpat rhoncus non rutrum risus. Urna egestas blandit lectus ac risus. Malesuada eros in elit sed nunc ultrices. Magna facilisis amet nibh bibendum. Tellus eget eget quam at platea et. Vulputate tincidunt faucibus aliquet velit sed massa augue cras.</p>
  </div>
</div>

<div className="flex flex-col lg:flex-row w-full lg:w-auto justify-around py-5">
  <div className="flex flex-col items-center justify-around lg:w-1/5">
    <p className="p-8 font-sahitya font-bold text-2xl leading-10 flex items-center capitalize text-purple-800">Your Votes</p>
  </div>
  <div className="flex flex-col justify-center items-center lg:w-4/5 lg:pl-8">
  <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
  <div className="flex flex-col items-center justify-around w-full lg:w-5/12 max-w-xl bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-700 shadow-md rounded-md px-4 py-6 lg:py-8" style={{ border: "3px solid #1A0532", filter: "drop-shadow(3px 3px 0px #1A0532)", borderRadius: "5px" }}>
      <p className="font-sahitya font-bold text-lg leading-6 flex items-center capitalize text-purple-900">add a new cours</p>
      <p className="font-maven-pro font-normal text-base lg:text-lg leading-6 flex items-center text-primary-black lg:ml-8">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="flex flex-col items-center justify-around w-full lg:w-5/12 max-w-xl bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-700 shadow-md rounded-md px-4 py-6 lg:py-8" style={{ border: "3px solid #1A0532", filter: "drop-shadow(3px 3px 0px #1A0532)", borderRadius: "5px" }}>
      <p className="font-sahitya font-bold text-lg leading-6 flex items-center capitalize text-purple-900">add a new cours</p>
      <p className="font-maven-pro font-normal text-base lg:text-lg leading-6 flex items-center text-primary-black lg:ml-8">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>
</div>


<div className="flex flex-col lg:flex-row w-full lg:w-auto justify-around py-5">
  <div className="flex flex-col items-center justify-around lg:w-1/5">
    <p className="p-8 font-sahitya font-bold text-2xl leading-10 flex items-center capitalize text-purple-800">Your proposals</p>
  </div>
  <div className="flex flex- col justify-center items-center lg:w-4/5 lg:pl-8">
  <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
    <div className="flex flex-col items-center justify-around w-full lg:w-5/12 max-w-xl bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-700 shadow-md rounded-md px-4 py-6 lg:py-8" style={{ border: "3px solid #1A0532", filter: "drop-shadow(3px 3px 0px #1A0532)", borderRadius: "5px" }}>
      <p className="font-sahitya font-bold text-lg leading-6 flex items-center capitalize text-purple-900">add a new cours</p>
      <p className="font-maven-pro font-normal text-base lg:text-lg leading-6 flex items-center text-primary-black lg:ml-8">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
    </div>

    <div className="flex flex-col items-center justify-around w-full lg:w-5/12 max-w-xl bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-700 shadow-md rounded-md px-4 py-6 lg:py-8" style={{ border: "3px solid #1A0532", filter: "drop-shadow(3px 3px 0px #1A0532)", borderRadius: "5px" }}>
      <p className="font-sahitya font-bold text-lg leading-6 flex items-center capitalize text-purple-900">add a new cours</p>
      <p className="font-maven-pro font-normal text-base lg:text-lg leading-6 flex items-center text-primary-black lg:ml-8">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>
</div>





      </div>
    </div>
  );
};

export default Profil;







