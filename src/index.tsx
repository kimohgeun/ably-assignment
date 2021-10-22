import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "~/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { GlobalStyle } from "~/styles";
import Router from "~/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
