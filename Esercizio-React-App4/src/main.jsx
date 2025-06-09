import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SWRConfig } from "swr";
import fetcher from "./fetcher.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRConfig value={{fetcher}}>
      <App />
    </SWRConfig>
  </StrictMode>
);
