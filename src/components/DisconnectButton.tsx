import { Button, ButtonProps } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

export default function DisconnectButton(props: ButtonProps) {
  const { deactivate, active } = useWeb3React();

  return (
    <Button
      {...props}
      onClick={deactivate}
      disabled={!active}
      color="secondary"
    >
      Disconnect
    </Button>
  );
}
