import React from "react";

interface Proposal {
  proposalId: number;
  title: string;
  description: string;
  forVotes: number;
  againstVotes: number;
  totalVotes: number;
  timeRemaining: string;
}

interface ProposalCardProps {
  proposal: Proposal;
}

const ProposalCard: React.FC<ProposalCardProps> = ({
  proposal,
}: ProposalCardProps) => {
  const {
    proposalId,
    title,
    description,
    forVotes,
    againstVotes,
    totalVotes,
    timeRemaining,
  } = proposal;

  return (
      <div className="bg-white rounded-md shadow-lg w-full overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          Proposal #{proposalId}: {title}
        </h3>
        <p className="max-w-2xl text-sm text-gray-500 mb-6">{description}</p>
        <div className="flex items-center justify-between border-t border-b border-gray-300 py-4">
          <div className="flex items-center space-x-4">
            <button
              className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-primaryPurple to-lightPurple"
            >
              For
            </button>
            <button
              className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-primaryPink to-pinkyPurple"
            >
              Against
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {forVotes} For / {againstVotes} Against / {totalVotes} Total
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-2">{timeRemaining} Left</div>
      </div>
    </div>
  );
};

export default ProposalCard;
