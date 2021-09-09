import {
  performanceMemoryOperation, performanceOperation, printSymbol, backOperation,
} from '../utils/utils';
import { clearDisplay } from '../display/display-function';

export function delegationWrapper(): void {
  const OPERATORS = document.querySelectorAll('.operators');
  const NUMBERS = document.querySelectorAll('.numbers');
  const MEMORY_OPERATORS = document.querySelectorAll('.memory-operators');
  const EQUAL = document.querySelector('.equal') as HTMLElement;
  const RESET = document.querySelector('.reset-button') as HTMLElement;
  const BACK = document.querySelector('.back-button') as HTMLElement;
  for (let i = 0; i < NUMBERS.length; i++) {
    const number = NUMBERS[i];
    number.addEventListener('click', (e) => {
      const input = e.target as HTMLButtonElement;
      printSymbol(input.textContent ?? '0');
    });
  }
  for (let i = 0; i < OPERATORS.length; i++) {
    const operationBtn = OPERATORS[i];
    operationBtn.addEventListener('click', (e) => {
      const input = e.target as HTMLButtonElement;
      printSymbol(input.value ?? '0');
    });
  }
  for (let i = 0; i < MEMORY_OPERATORS.length; i++) {
    const operationBtn = MEMORY_OPERATORS[i];
    operationBtn.addEventListener('click', (e) => {
      const input = e.target as HTMLButtonElement;
      performanceMemoryOperation(input.value ?? '0');
    });
  }
  EQUAL.addEventListener('click', () => {
    performanceOperation();
  });
  RESET.addEventListener('click', () => {
    clearDisplay();
  });
  BACK.addEventListener('click', () => {
    backOperation();
  });
}
