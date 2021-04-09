import {
  Grid,
  Container,
  Snackbar,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import useWeb3React from "hooks/useWeb3React";
import ConnectButton from "components/ConnectButton";
import DisconnectButton from "components/DisconnectButton";
import Address from "components/Address";
import Balance from "components/Balance";
import SendForm from "components/SendForm";

const useStyles = makeStyles({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: "1rem 1.4rem",
    margin: "1rem 1.4rem",
  },
});

export default function Index() {
  const { active, error } = useWeb3React();

  const styles = useStyles();

  function renderConnectButton() {
    return (
      <Grid item xs={12} container justify="center">
        {active ? <DisconnectButton /> : <ConnectButton />}
      </Grid>
    );
  }

  function renderAccount() {
    return (
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          <Address />
          <Balance />
        </Paper>
      </Grid>
    );
  }

  function renderError() {
    return (
      <Snackbar open={!!error}>
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>
    );
  }

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Grid container justify="center" alignItems="center">
        {renderConnectButton()}
        {active && renderAccount()}
        <Grid item xs={12}>
          {active && <SendForm />}
        </Grid>
      </Grid>
      {renderError()}
    </Container>
  );
}
