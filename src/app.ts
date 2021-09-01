import { Buttons } from "./buttons";
import { Display } from "./display";

export function App(): void {
  const appElement = document.querySelector("main") as HTMLElement;
  Display(appElement);
  Buttons(appElement);
}