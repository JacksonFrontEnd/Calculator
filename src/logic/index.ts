import {
  performanceUnaryOperation, perfomanceMemoryOperation, performanceOperation, printSymbol,
} from '../const/utils';

export function delegationWrapper(): void {
  const UNARY_OPERATORS = document.querySelectorAll('.unary-operators');
  const OPERATORS = document.querySelectorAll('.operators');
  const NUMBERS = document.querySelectorAll('.numbers');
  const MEMORY_OPERATORS = document.querySelectorAll('.memory-operators');
  const EQUAL = document.querySelector('.equal') as HTMLElement;
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
      const input = e.target as HTMLElement;
      printSymbol(input.textContent ?? '0');
    });
  }
  for (let i = 0; i < UNARY_OPERATORS.length; i++) {
    const operationBtn = UNARY_OPERATORS[i];
    operationBtn.addEventListener('click', (e) => {
      const input = e.target as HTMLElement;
      performanceUnaryOperation(input.textContent ?? '0');
    });
  }
  for (let i = 0; i < MEMORY_OPERATORS.length; i++) {
    const operationBtn = MEMORY_OPERATORS[i];
    operationBtn.addEventListener('click', (e) => {
      const input = e.target as HTMLElement;
      perfomanceMemoryOperation(input.textContent ?? '0');
    });
  }
  EQUAL.addEventListener('click', () => {
    performanceOperation();
  });
}
