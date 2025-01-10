import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Create root element and render app with strict mode enabled
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
