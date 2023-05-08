import Link from "next/link";
import React from "react";

function ProposalIntroCard() {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-md shadow-lg w-full overflow-hidden sm:rounded-lg mb-20">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://via.placeholder.com/48"
            alt="DAO Logo"
          />
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              DAO Name
            </h3>
            <p className="text-sm text-gray-500">
              A short description of the DAO.
            </p>
            <p className="text-sm text-gray-500 font-medium">
              Network: Ethereum (ERC20)
            </p>
            <p className="text-sm text-gray-500">Total Balance: 10,000 ETH</p>
          </div>
        </div>
        <Link href='/proposals/create' className="text-white bg-darkPurple hover:bg-blackPurple  font-medium py-2 px-4 rounded">
          Create Proposal
        </Link>
      </div>
    </div>
  );
}

export default ProposalIntroCard;
