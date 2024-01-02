import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStoreAsync } from "./app/store.ts";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);

configureStoreAsync().then((store) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
});
