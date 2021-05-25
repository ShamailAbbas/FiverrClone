import "../styles/tailwind.css";

import { AppProps } from "next/app";
import { AuthState } from "../AuthState";
import ApolloProvider from "../ApolloProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <AuthState>
        <Component {...pageProps} />
      </AuthState>
    </ApolloProvider>
  );
}

export default App;
