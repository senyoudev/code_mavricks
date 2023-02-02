import React, { useState } from "react";

const ConnectModal = ({showModal,setShowModal}:any) => {

  return (
    <div className="relative ">
      {showModal && (
        <div className="fixed inset-0 overflow-hidden text-darkPurple font-maven-pro">
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          <div className="relative w-64 mx-auto my-10 bg-linearPurple rounded-lg p-6">
            <div className="flex items-center  justify-between border-b border-secondaryPurple pb-2">
              <h3 className="text-lg font-medium">Choose a Wallet</h3>
              <button
                onClick={() => setShowModal(false)}
                className="hover:text-red-800"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <button className="w-full p-2 border-2 flex items-center justify-center border-secondaryPurple rounded hover:bg-white">
                <img
                  src="./assets/images/coinbase.svg"
                  className="w-6 h-6 mr-2"
                />
                Coinbase
              </button>
              <button className="w-full flex items-center justify-center p-2 border-2 border-secondaryPurple rounded hover:bg-white mt-2">
                <img
                  src="./assets/images/metamask.svg"
                  className="w-6 h-6 mr-2"
                />
                MetaMask
              </button>
              <button className="w-full flex items-center justify-center p-2 border-2 border-secondaryPurple rounded hover:bg-white mt-2">
                <img
                  src="./assets/images/walletconnect.svg"
                  className="w-6 h-6 mr-2"
                />
                WalletConnect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectModal;
