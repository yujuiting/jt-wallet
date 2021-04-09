import { AbstractConnector } from "@web3-react/abstract-connector";
import {
  injectedConnector,
  walletConnectConnector,
} from "constants/connectors";

export interface WalletType {
  connector: AbstractConnector;
  name: string;
  beforeConnect?: () => void;
  afterDisconnect?: () => void;
}

export default [
  { connector: injectedConnector, name: "Injected" },
  {
    connector: walletConnectConnector,
    name: "WalletConnect",
    beforeConnect: () => {
      /**
       * @see https://github.com/Uniswap/uniswap-interface/blob/8fd894f2d1/src/components/WalletModal/index.tsx#L183
       */
      if (walletConnectConnector.walletConnectProvider?.wc?.uri) {
        walletConnectConnector.walletConnectProvider = undefined;
      }
    },
    afterDisconnect: () => {
      localStorage.removeItem("walletconnect");
    },
  },
] as WalletType[];
