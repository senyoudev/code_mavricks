import React from "react";

function Card() {
  return (

    // <div className="h-56 grid grid-cols-2 gap-2 content-start">
    <div className="bg-linearPurple md:h-52  shadow-3xl items-center flex md:flex-row flex-col">
    <div className="mx-8 flex flex-col items-center  justify-around bg-linearPurple md:h-72 h-140 md:w-7/12 shadow-3xl border-2 border-solid border-darkPurple items-center  rounded ">
        <h3 className="font-sahitya text-blackPurple text-xl font-bold  capitalize">
            codeMavericks
        </h3>
        <p className="font-maven-pro text-primaryBlack w-3/4  leading-8  capitalize">
            CodeMavricks Dao aims to train 1m web3 Developper. The DAO could be structured in a way that allows community members to contribute resources,CodeMavricks Dao aims to train 1m web3 Developper. The DAO could be structured in a way that allows community members to contribute resources,  expertise, and ideas to the training program.
        </p>
    </div>
    <div className=" ml-8 mr-4 flex flex-col items-center justify-around bg-linearPurple md:h-22 h-140 md:w-7/12 shadow-3xl border-2 border-solid border-darkPurple items-center  rounded ">
        <h3 className="font-sahitya text-blackPurple text-xl font-bold text-center capitalize">
            Lorem ipsum
        </h3>
        <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
            Plurality voting: In this system, each member gets one vote and the option with the most votes wins. Plurality voting: In this system, each member gets one vote and the option with the most votes wins. Plurality voting: In this system.
        </p>
    </div>
    </div>
//    
   );
}

export default Card;
