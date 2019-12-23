import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ConfigurationProvider } from "./providers/ConfigurationProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { UserProvider } from "./providers/UserProvider";
import "./index.scss";

ReactDOM.render(
  <ConfigurationProvider>
    <SearchProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SearchProvider>
  </ConfigurationProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();