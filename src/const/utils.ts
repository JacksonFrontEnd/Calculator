import {
  addDataFromDisplay,
  calculateBaseOperation,
  clearDisplay,
  clearWithDelay,
  getDataFromDisplay,
  isOperator,
  setDataFromDisplay,
} from '../logic/math-function';

export const performanceOperation = (): void => {
  calculateBaseOperation(getDataFromDisplay() ?? '0');
};
export const printSymbol = (symbol: string): void => {
  if ('0'.indexOf(getDataFromDisplay() ?? '0') !== -1) {
    setDataFromDisplay('');
  } else if (isOperator(symbol)) {
    addDataFromDisplay(` ${symbol} `);
  } else addDataFromDisplay(symbol);
};
export const performanceUnaryOperation = (unary: string): void => {
  let str = getDataFromDisplay()?.split(' ') ?? ['0'];
  const number = Number(str[str.length - 1]);
  switch (unary) {
    case '2nd':
      str[str.length - 1] = String(2 ** number);
      break;
    case 'x2':
      str[str.length - 1] = String(number ** 2);
      break;
    case 'x3':
      str[str.length - 1] = String(number ** 3);
      break;
    case 'ex':
      str[str.length - 1] = String(2.71 ** number);
      break;
    case '10x':
      str[str.length - 1] = String(10 ** number);
      break;
    case '1/x':
      if (number === 0) {
        clearWithDelay();
      } else {
        str[str.length - 1] = String(1 / number);
      }
      break;
    case '2√x':
      if (number < 0) {
        clearWithDelay();
      } else {
        str[str.length - 1] = String(number ** 1 / 2);
      }
      break;
    case '3√x':
      if (number < 0) {
        clearWithDelay();
      } else {
        str[str.length - 1] = String(number ** 1 / 3);
      }
      break;
    case 'Ln':
      str[str.length - 1] = String(Math.log(number));
      break;
    case 'Log10':
      str[str.length - 1] = String(Math.log10(number));
      break;
    case '+/-':
      str[str.length - 1] = `${Number(str[str.length - 1]) * -1}`;
      break;
    case 'AC':
      str = ['0'];
      break;
    default:
      break;
  }
  setDataFromDisplay(str.join(' '));
};
export const perfomanceMemoryOperation = (memory_operation: string): void => {
  let memory = 0;
  const number = Number(getDataFromDisplay());
  switch (memory_operation) {
    case 'MR':
      setDataFromDisplay(String(memory));
      break;
    case 'MC':
      memory = 0;
      break;
    case 'M+':
      memory += number;
      clearDisplay();
      break;
    case 'M-':
      memory -= number;
      clearDisplay();
      break;
    default:
      break;
  }
};
