import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  5: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
  11155111: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
};

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 1337, 3, 4, 5, 42,80001],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1],
    4: RPC_URLS[4],
  },
  qrcode: true,
  pollingInterval: 15000,
});

export function resetWalletConnector(connector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
}

//coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[4],
  appName: "demo-app",
  supportedChainIds: [1, 4],
});
