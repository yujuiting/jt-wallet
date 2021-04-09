import { Button, ButtonGroup, ButtonGroupProps } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import walletTypes, { WalletType } from "constants/wallet-types";
import { useCallback } from "react";

export default function ConnectButton(props: ButtonGroupProps) {
  function renderWalletTypeButton(walletType: WalletType) {
    return <WalletTypeButton key={walletType.name} walletType={walletType} />;
  }

  return (
    <ButtonGroup {...props}>
      {walletTypes.map(renderWalletTypeButton)}
    </ButtonGroup>
  );
}

interface WalletTypeButtonProps {
  walletType: WalletType;
}

function WalletTypeButton({ walletType }: WalletTypeButtonProps) {
  const { name, connector, beforeConnect } = walletType;

  const { activate } = useWeb3React();

  const onClick = useCallback(() => {
    if (beforeConnect) beforeConnect();
    activate(connector);
  }, [activate, connector, beforeConnect]);

  return <Button onClick={onClick}>{name}</Button>;
}
