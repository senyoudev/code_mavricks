import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import useBalance from "../../hooks/useBalance";
import { FaUserAlt } from "react-icons/fa";

function ConnectWallet() {
  const { active, account } = useWeb3React();
  const balance = useBalance();
  const accountLength = String(account).length;

  return (
    <button className="hidden  md:flex md:items-center mt-0 py-2 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300 ">
      <FaUserAlt className="mr-0.5"/>
      {`${String(account).substring(0, 4)}` +
        "..." +
        `${String(account).substring(
          accountLength - 4,
          accountLength
        )} / ${balance}`}
    </button>
  );

  // <button
  //   onClick={() => {
  //     if(!account) setShowModal(true)
  //   }}
  //   className="hidden md:block mt-0 py-0.5 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300"
  // >
  //   {active
  //     ? `${String(account).substring(0, 4)}` +
  //       "..." +
  //       `${String(account).substring(
  //         accountLength - 4,
  //         accountLength
  //       )} / ${balance}`
  //     : "Connect your wallet"}
  // </button>
}

export default ConnectWallet;
