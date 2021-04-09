import { forwardRef } from "react";
import { makeStyles } from "@material-ui/core";
import { Alert as OriginalAlert, AlertProps } from "@material-ui/lab";

const useStyles = makeStyles({
  alert: {
    maxWidth: "100%",
  },
  alertMessage: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export default forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const styles = useStyles();
  return (
    <OriginalAlert
      ref={ref}
      className={styles.alert}
      classes={{ message: styles.alertMessage }}
      {...props}
    />
  );
});
