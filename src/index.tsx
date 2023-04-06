import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
