import { useRouter } from "next/router";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

function ProposalDetails() {
  const router = useRouter();
  const { account } = useWeb3React();

  useEffect(() => {
    // This code will only run on the client-side
    if (!account) {
      router.push("/");
    }
  }, [account, router]);

  return (
    <div className="bg-linearPurple min-h-screen flex flex-col">
      <div className="flex items-center justify-center py-16">
        <div className="w-full max-w-7xl">
          <div className="bg-white rounded-md shadow-lg px-8 py-12">
            <h2 className="text-2xl font-bold text-primaryBlack mb-4">
              Proposal Details
            </h2>
            <div className="mb-4">
              <p className="text-lg font-medium text-primaryBlack">
                Proposal Title
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                ligula eget augue iaculis feugiat non vel velit.
              </p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-medium text-primaryBlack">Votes</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-primaryPurple w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold">100</span>
                  </div>
                  <span className="text-gray-500 ml-2">For</span>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-primaryPink w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold">50</span>
                  </div>
                  <span className="text-gray-500 ml-2">Against</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-lg font-medium text-primaryBlack">
                Time Remaining
              </p>
              <p className="text-gray-500">3 days, 4 hours, 30 minutes</p>
            </div>
            <div className="flex items-center justify-end">
              <button className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-primaryPurple to-lightPurple hover:opacity-80 mr-2">
                For
              </button>
              <button className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-primaryPink to-pinkyPurple hover:opacity-80">
                Against
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProposalDetails;
