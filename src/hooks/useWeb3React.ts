import { useWeb3React as untypedUseWeb3React } from "@web3-react/core";
import { providers } from "ethers";

export default function useWeb3React() {
  return untypedUseWeb3React<providers.Web3Provider>();
}
