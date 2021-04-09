import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injectedConnector = new InjectedConnector({
  /**
   * @see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md
   */
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletConnectConnector = new WalletConnectConnector({
  rpc: { 1: process.env.RPC_URL_1 || "" },
  bridge: process.env.WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
  pollingInterval: 12000,
});
