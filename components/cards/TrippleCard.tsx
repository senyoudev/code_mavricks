import React from "react";

function TrippleCard({}) {
  return (
    <div className="bg-linearPurple h-52 shadow-3xl border-2 border-solid border-darkPurple  rounded flex flex-row">
      <div className="w-1/3 flex flex-col items-center justify-around">
        <h3 className="font-sahitya text-blackPurple text-xl font-bold text-center capitalize">
          Purpose
        </h3>
        <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
          CodeMavricks Dao aims to train 1m web3 Developper.
        </p>
      </div>
      <div className="h-3/4 w-1 border-l border-darkPurple my-auto"></div>
      <div className="w-1/3 flex flex-col items-center justify-around">
        <h3 className="font-sahitya text-blackPurple text-xl font-bold text-center capitalize">
          Purpose
        </h3>
        <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
          CodeMavricks Dao aims to train 1m web3 Developper.
        </p>
      </div>
      <div className="h-3/4 w-1 border-l border-darkPurple my-auto"></div>
      <div className="w-1/3 flex flex-col items-center justify-around">
        <h3 className="font-sahitya text-blackPurple text-xl font-bold text-center capitalize">
          Purpose
        </h3>
        <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
          CodeMavricks Dao aims to train 1m web3 Developper.
        </p>
      </div>
    </div>
  );
}

export default TrippleCard;
