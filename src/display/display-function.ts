export function getDataFromDisplay():string {
  const DISPLAY = document.querySelector('.display-field') as HTMLOutputElement;
  return DISPLAY?.textContent ?? '0';
}
export const setDataFromDisplay = (str:string): void => {
  const DISPLAY = document.querySelector('.display-field') as HTMLOutputElement;
  DISPLAY.textContent = str;
};
export const addDataFromDisplay = (str:string): void => {
  const DISPLAY = document.querySelector('.display-field') as HTMLOutputElement;
  DISPLAY.textContent += str;
};
export const clearDisplay = ():void => {
  setDataFromDisplay('0');
};
export const clearWithDelay = ():void => {
  setDataFromDisplay('Error');
  setTimeout(clearDisplay, 1500);
};
