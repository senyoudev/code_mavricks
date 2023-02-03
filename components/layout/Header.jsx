import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navs } from "../../data/navs";
import ConnectWallet from "../Wallet/ConnectWallet";
import ConnectModal from "../Modals/ConnectModal";
import { useWeb3React } from "@web3-react/core";
import {
  injected,
  resetWalletConnector,
  walletconnect,
  walletlink,
} from "../../utils/connectors";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { activate } = useWeb3React();

  //web3react metamask

  //web3react metamask
  const connectMetamask = async () => {
    try {
      await activate(injected);
      localStorage.setItem("wallet", JSON.stringify("metamask"));
      setShowModal(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  //web3react walletconnect
  const connectWalletConnect = async () => {
    try {
      resetWalletConnector(walletconnect);
      await activate(walletconnect);
      localStorage.setItem("wallet", JSON.stringify("walletconnect"));
      setShowModal(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  //web3react coinbase
  const connectCoinbase = async () => {
    try {
      await activate(walletlink);
      localStorage.setItem("wallet", JSON.stringify("coinbase"));
      setShowModal(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  const connectWalletOnPageLoad = async () => {
    if (localStorage?.getItem("wallet")) {
      console.log(localStorage.getItem("wallet"));
      if (JSON.parse(localStorage.getItem("wallet")) == "metamask")
        await connectMetamask();
      else if (JSON.parse(localStorage.getItem("wallet")) == "coinbase")
        await connectCoinbase();
      else if (JSON.parse(localStorage.getItem("wallet")) == "walletconnect")
        await connectWalletConnect();
    }
  };
  //To keep the wallet connected on refresh
  useEffect(() => {
    connectWalletOnPageLoad();
  }, []);

  return (
    <header
      className={
        isOpen
          ? "w-full bg-linearPurple  pb-48 transition-all ease-in-out duration-300"
          : "w-full bg-linearPurple transition-all ease-in-out duration-300 "
      }
    >
      <nav className=" relative container mx-auto p-6 container py-6 px-20 h-4 md:h-14  mx-auto  bg-blur-13">
        <div className="flex items-center justify-between">
          <div className="pt-2 cursor-pointer">
            <Link href="/">
              <img src="/assets/images/MAVERICS.png" alt="logo" />
            </Link>
          </div>

          <div className="h-full hidden md:flex  text-base items-center gap-4 text-blackPurple">
            {navs.map(({ title, link }, idx) => (
              <Link href={link} key={idx} scroll={false} legacyBehavior>
                <a className="cursor-pointer font-maven-pro hover:bg-light duration-200 rounded-sm px-2 py-1">
                  {title}
                </a>
              </Link>
            ))}
          </div>

          <ConnectWallet setShowModal={setShowModal} />

          <button
            id="menu-btn"
            className={
              isOpen
                ? "block hamburger md:hidden focus:outline-none open"
                : "block hamburger md:hidden focus:outline-none"
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute card flex-col z-10 items-center mt-2 rounded-md  self-end py-8 space-y-6 font-bold bg-primaryPink sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {navs.map(({ title, link }, idx) => (
              <Link href={link} key={idx} scroll={false} legacyBehavior>
                <a className="cursor-pointer  font-maven-pro hover:bg-secondaryPurple hover:text-white hover:px-4 hover:py-2 hover:rounded duration-200 rounded-sm px-2 py-1">
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <ConnectModal
        showModal={showModal}
        setShowModal={setShowModal}
        connectCoinbase={connectCoinbase}
        connectMetamask={connectMetamask}
        connectWalletConnect={connectWalletConnect}
      />
    </header>
  );
}

export default Header;
