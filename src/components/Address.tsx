import { Button, ButtonProps } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import useWeb3React from "hooks/useWeb3React";
import { useCallback } from "react";
import copyText from "utils/copy-text";

export default function Address(props: ButtonProps) {
  const { account } = useWeb3React();

  const onClick = useCallback(() => copyText(account || ""), [account]);

  function renderAccount() {
    if (!account) return "-";
    return `${account.substr(0, 6)}...${account.substr(-4, 4)}`;
  }

  return (
    <Button {...props} endIcon={<FileCopy />} onClick={onClick}>
      Address: {renderAccount()}
    </Button>
  );
}
