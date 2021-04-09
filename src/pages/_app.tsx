import { AppProps } from "next/app";
import { useEffect } from "react";
import { providers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "constants/theme";

function getLibrary(provider: any): providers.Web3Provider {
  const library = new providers.Web3Provider(provider);
  return library;
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    /**
     * Remove the server-side injected CSS.
     * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
     */
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3ReactProvider>
  );
}
