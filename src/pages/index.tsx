import { Grid, Snackbar, Paper, makeStyles } from "@material-ui/core";
import useWeb3React from "hooks/useWeb3React";
import ConnectButton from "components/ConnectButton";
import DisconnectButton from "components/DisconnectButton";
import Address from "components/Address";
import Balance from "components/Balance";
import SendForm from "components/SendForm";
import Alert from "components/Alert";

const useStyles = makeStyles({
  container: {
    height: "100%",
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

  function render() {
    return (
      <>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Address />
            <Balance />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <SendForm />
        </Grid>
      </>
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
    <Grid
      className={styles.container}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        {renderConnectButton()}
        {active && render()}
      </Grid>
      {renderError()}
    </Grid>
  );
}
