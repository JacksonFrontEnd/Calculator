import { App } from "./app";
import "./index.scss";

window.onload = () => {
  const main = document.createElement("main");
  document.body.appendChild(main);
  const rootElement = document.querySelector("main");
  if (!rootElement) throw Error("App root element not found");
  App();
};