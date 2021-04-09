import { Typography, TypographyProps } from "@material-ui/core";
import useWeb3React from "hooks/useWeb3React";

export default function Address(props: TypographyProps) {
  const { account } = useWeb3React();

  function renderAccount() {
    if (!account) return "-";
    return `${account.substr(0, 6)}...${account.substr(-4, 4)}`;
  }

  return <Typography {...props}>Address: {renderAccount()}</Typography>;
}
