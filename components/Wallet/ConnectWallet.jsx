import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../utils/Connector";
import useBalance from "../../hooks/useBalance";

function ConnectWallet() {
  const { active, activate, account } = useWeb3React();
  const balance = useBalance()
  const accountLength = String(account).length;

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  const connectWalletOnPageLoad = async () => {
    if (localStorage?.getItem("isWalletConnected") === "true") {
      try {
        await activate(injected);
        localStorage.setItem("isWalletConnected", true);
      } catch (ex) {
        console.log(ex);
      }
    }
  };
  //To keep the wallet connected on refresh
  useEffect(() => {
    connectWalletOnPageLoad();
  }, []);
  return (
    <button
      onClick={connect}
      className="hidden md:block mt-0 py-0.5 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300"
    >
      {active
        ? `${String(account).substring(0, 4)}` +
          "..." +
          `${String(account).substring(accountLength - 4, accountLength)} / ${balance}`
        : "Connect your wallet"}
    </button>
  );
}

export default ConnectWallet;
