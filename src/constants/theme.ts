import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "body, #__next": {
          height: "100vh",
        },
      },
    },
  },
});
