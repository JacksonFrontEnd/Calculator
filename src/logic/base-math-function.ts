import { TwoNumbersAndOperator } from '../utils/types';

export const performanceMathOperation = ({ num1, num2, operator }: TwoNumbersAndOperator):number => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '**': return num1 ** num2;
    case '*': return num1 * num2;
    case '/': return num1 / num2;
    case '%': return num1 % num2;
    case '√': return num2 ** (1 / num1);
    case 'Ln': return Math.log(num2);
    case 'Log': return Math.log10(num2);
    default: return 0;
  }
};
