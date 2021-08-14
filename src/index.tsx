import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./indexStyle.ts";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./indexStyle";
import AppContainer from "./app-container/AppContainer";
import Loader from "./assets/animations/loader/Loader";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppContainer>
          <GlobalStyle />
          <App />
        </AppContainer>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
