import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "normalize.css/normalize.css";
import "milligram/dist/milligram.min.css";
import App from "./components/App";

// Mount component
const root = createRoot(document.getElementById("root"));
root.render(<App />);
