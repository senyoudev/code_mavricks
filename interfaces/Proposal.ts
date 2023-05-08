export interface Proposal {
  proposalId: number;
  title: string;
  description: string;
  forVotes: number;
  againstVotes: number;
  timeRemaining: string;
  votingPassed:boolean;
  paid:boolean;
}
