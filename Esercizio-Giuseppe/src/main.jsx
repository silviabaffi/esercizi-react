import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import fetcher from "./fetcher.js";
import { SWRConfig } from "swr";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </StrictMode>
);
