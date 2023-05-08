import Link from "next/link";
import React from "react";
import { Proposal } from "../../interfaces/Proposal";

interface ProposalCardProps {
  proposal: Proposal;
  voteFor: (proposalId: string | number) => Promise<void>;
  voteAgainst: (proposalId: string | number) => Promise<void>;
}

const ProposalCard: React.FC<ProposalCardProps> = ({
  proposal,
  voteFor,
  voteAgainst,
}: ProposalCardProps) => {
  const {
    proposalId,
    title,
    description,
    forVotes,
    againstVotes,
    timeRemaining,
  } = proposal;

  

  return (
    <div className="bg-white rounded-md shadow-lg w-full overflow-hidden">
      <div className="p-6">
        <Link
          href={`/proposals/${proposalId}`}
          className="transition duration-300 ease-in-out"
        >
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Proposal #{proposalId}: {title}
          </h3>
        </Link>

        <p className="max-w-2xl text-sm text-gray-500 mb-6">{description}</p>
        <div className="flex items-center justify-between border-t border-b border-gray-300 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => voteFor(proposalId)}
              className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-primaryPurple to-lightPurple hover:from-lightPurple hover:to-primaryPurple"
            >
              For
            </button>
            <button
              onClick={() => voteAgainst(proposalId)}
              className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-primaryPink to-pinkyPurple hover:from-pinkyPurple hover:to-primaryPink"
            >
              Against
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {forVotes} For / {againstVotes} Against / {forVotes + againstVotes}{" "}
            Total
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-2">{timeRemaining} Left</div>
      </div>
    </div>
  );
};

export default ProposalCard;
