import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import fetcher from "./fetcher.js";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SWRConfig value={{ fetcher: fetcher }}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </StrictMode>
);
