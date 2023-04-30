import { useState } from "react";

interface Token {
  name: string;
  symbol: string;
  icon: string;
}

interface Props {
  token: Token;
  price: number;
}

const TokenPurchaseCard: React.FC<Props> = ({ token, price }) => {
  const [tokenAmount, setTokenAmount] = useState<number>();
  const [totalCost, setTotalCost] = useState<number>();

  const handleTokenAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = Number(event.target.value);
    setTokenAmount(amount);
    setTotalCost(amount * price);
  };

  const handleBuy = () => {
    // Here you can add the code to handle the purchase of tokens from the DAO
    // You can call a function from a smart contract or a backend API to execute the purchase
  };

  return (
    <div className="p-6 bg-linearPurple rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-2">
          <img
            src={token.icon}
            alt={`${token.name} icon`}
            className="h-8 w-8 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-medium text-blackPurple">{token.name}</h2>
          <p className="text-sm text-blackPurple">{`1 ${token.symbol} = ${price} ETH`}</p>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="token-amount"
          className="text-sm font-medium text-blackPurple"
        >
          Enter the amount of {token.symbol} you want to purchase
        </label>
        <div className="flex items-center mt-2">
          <input
            type="number"
            name="token-amount"
            id="token-amount"
            placeholder="0.00"
            className="flex-1 appearance-none border border-gray-300 rounded-md py-2 px-4 text-blackPurple leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            value={tokenAmount}
            onChange={handleTokenAmountChange}
          />
          <span className="ml-2 font-medium">{token.symbol}</span>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="total-cost"
          className="text-sm font-medium text-blackPurple"
        >
          Total cost
        </label>
        <div className="flex items-center mt-2">
          <input
            type="text"
            name="total-cost"
            id="total-cost"
            className="flex-1 appearance-none border border-gray-300 rounded-md py-2 px-4 text-blackPurple leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            value={`${totalCost ?? 0} ETH`}
            readOnly
          />
        </div>
      </div>
      <button
        type="button"
        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-darkPurple hover:bg-blackPurple focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        onClick={handleBuy}
        disabled={!tokenAmount || totalCost! <= 0}
      >
        Buy {token.symbol}
      </button>
    </div>
  );
};

export default TokenPurchaseCard;
