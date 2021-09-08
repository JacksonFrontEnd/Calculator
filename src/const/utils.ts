import { BaseOperationCommand } from '../command/calculate-base-operation';
import { Calculator } from '../command/calculator';
import {
  addDataFromDisplay,
  calculateAllOperation,
  clearDisplay,
  getDataFromDisplay,
  isOperator,
  isUnaryOperator,
  setDataFromDisplay,
} from '../logic/math-function';

const calculator = new Calculator();
export const performanceOperation = (): void => {
  calculateAllOperation(getDataFromDisplay() ?? '0', calculator);
};
export const printSymbol = (symbol: string): void => {
  if ('0'.indexOf(getDataFromDisplay()) !== -1) {
    setDataFromDisplay('');
  }
  if (isOperator(symbol)) {
    calculator.executeCommand(new BaseOperationCommand(getDataFromDisplay()));
    addDataFromDisplay(` ${symbol} `);
  } else if (isUnaryOperator(symbol)) {
    calculator.executeCommand(new BaseOperationCommand(getDataFromDisplay()));
    addDataFromDisplay(`${symbol} `);
  } else addDataFromDisplay(symbol);
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
export const backOperation = ():void => {
  calculator.undo();
  setDataFromDisplay(String(calculator.getValue()));
};
