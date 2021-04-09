import { Button, ButtonProps } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import walletTypes from "constants/wallet-types";
import { useCallback, useMemo } from "react";

export default function DisconnectButton(props: ButtonProps) {
  const { deactivate, active, connector } = useWeb3React();

  const walletType = useMemo(
    () => walletTypes.find((wt) => wt.connector === connector),
    [connector]
  );

  const onClick = useCallback(() => {
    deactivate();
    if (walletType?.afterDisconnect) walletType?.afterDisconnect();
  }, [walletType, deactivate]);

  return (
    <Button {...props} onClick={onClick} disabled={!active} color="secondary">
      Disconnect
    </Button>
  );
}
