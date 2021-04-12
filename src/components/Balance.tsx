import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import { Typography, TypographyProps } from "@material-ui/core";
import useWeb3React from "hooks/useWeb3React";

export default function Balance(props: TypographyProps) {
  const { library, account } = useWeb3React();
  const [balance, setBalance] = useState<BigNumber>(() => BigNumber.from(0));

  useEffect(() => {
    if (!library || !account) return;

    library.getBalance(account).then(setBalance);
  }, [library, account]);

  return (
    <Typography {...props}>
      Balance: {ethers.utils.formatEther(balance)}
    </Typography>
  );
}
