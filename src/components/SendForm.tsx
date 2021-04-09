import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Snackbar,
  FormHelperText,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { BigNumber } from "ethers";
import { useForm, Controller } from "react-hook-form";
import NumberField from "components/NumberField";
import Alert from "components/Alert";
import useWeb3React from "hooks/useWeb3React";

const useStyles = makeStyles({
  paper: {
    padding: "1rem 1.4rem",
    margin: "1rem 1.4rem",
  },
  input: {
    width: "100%",
  },
  field: {
    marginBottom: "1.4rem",
  },
});

type FormData = {
  address: string;
  amount: string;
};

export default function SendForm() {
  const styles = useStyles();

  const { library, account } = useWeb3React();

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty },
    control,
  } = useForm<FormData>({ mode: "onBlur" });

  const [error, setError] = useState<Error | undefined>();

  useEffect(() => console.log(error), [error]);

  const onSubmut = handleSubmit(({ address, amount }) => {
    if (!library || !account) return;

    library
      .getSigner()
      .sendTransaction({
        from: account,
        to: address,
        nonce: Math.random() * 10e15,
        value: amount,
      })
      .then(console.log)
      .catch(setError);
  });

  return (
    <>
      <Paper className={styles.paper}>
        <form onSubmit={onSubmut}>
          <Grid container justify="center">
            <Grid item xs={12} className={styles.field}>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Address"
                    className={styles.input}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} className={styles.field}>
              <Controller
                name="amount"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <NumberField
                    {...field}
                    label="Amount"
                    className={styles.input}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              container
              justify="center"
              className={styles.field}
            >
              <GasPrice />
            </Grid>
            <Grid item xs={12} container justify="center">
              <Button type="submit" disabled={!isDirty || !isValid}>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar open={!!error} onClose={() => setError(undefined)}>
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>
    </>
  );
}

function GasPrice() {
  const { library } = useWeb3React();

  const [gasPrice, setGasPrice] = useState(() => BigNumber.from(0));

  useEffect(() => {
    if (!library) return;

    library.getGasPrice().then(setGasPrice);
  }, [library]);

  return <FormHelperText>Gas Price: {gasPrice.toString()}</FormHelperText>;
}
