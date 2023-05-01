import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main/main.css";

import Contacts from "./main/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Contacts />
  </StrictMode>
);
