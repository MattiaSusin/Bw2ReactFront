import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/assets/Components/Css/reset.css";
import "../src/assets/Components/Css/Login.css";
import "../src/assets/Components/Css/Registrazione.css";
import "../src/assets/Components/Css/Selezione.css";
import "../src/assets/Components/Css/Cliente.css";
import "../src/assets/Components/Css/Dashboard.css";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
