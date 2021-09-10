import { BaseOperationCommand } from '../command/calculate-base-operation';
import { Calculator } from '../command/calculator';
import { memory } from '../const/const';
import {
  getDataFromDisplay,
  setDataFromDisplay,
  addDataFromDisplay,
  clearDisplay,
  clearWithDelay,
} from '../display/display-function';
import {
  calculateAllOperation,
  isOperator,
  isUnaryOperator,
} from '../logic/math-function';

const calculator = new Calculator();
export const performanceOperation = (): void => {
  const str = getDataFromDisplay();
  calculateAllOperation({ str, calculator });
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
const readMemory = () => {
  setDataFromDisplay(String(memory[0]));
};
const resetMemory = () => {
  memory[0] = 0;
};
const addMemory = (number: number) => {
  memory[0] += number;
};
const subtractMemory = (number: number) => {
  memory[0] -= number;
};
export const performanceMemoryOperation = (memory_operation: string): void => {
  const number = Number(getDataFromDisplay());
  if (Number.isNaN(number)) {
    clearWithDelay();
  } else {
    switch (memory_operation) {
      case 'MR':
        readMemory();
        break;
      case 'MC':
        resetMemory();
        break;
      case 'M+':
        addMemory(number);
        clearDisplay();
        break;
      case 'M-':
        subtractMemory(number);
        clearDisplay();
        break;
      default:
        break;
    }
  }
};
export const backOperation = (): void => {
  calculator.undo();
  setDataFromDisplay(String(calculator.getValue()));
};
