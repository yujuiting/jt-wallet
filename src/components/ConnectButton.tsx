import { Button, ButtonProps } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "constants/connectors";

export default function ConnectButton(props: ButtonProps) {
  const { activate, active } = useWeb3React();

  function onClick() {
    activate(injectedConnector);
  }

  return (
    <Button {...props} onClick={onClick} disabled={active} color="primary">
      Connect
    </Button>
  );
}
