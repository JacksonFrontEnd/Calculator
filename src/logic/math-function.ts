import { operationStack, out } from '../const/const';
import { BaseOperationCommand } from '../command/calculate-base-operation';
import { Calculator } from '../command/calculator';
import { performanceMathOperation } from './base-math-function';
import { clearWithDelay, setDataFromDisplay } from '../display/display-function';

export function getPriority(s: string):number {
  switch (s) {
    case '(': return 5;
    case ')': return 4;
    case '+': return 3;
    case '-': return 3;
    case '/': return 2;
    case '*': return 2;
    case '%': return 2;
    case '**': return 1;
    case '√': return 1;
    case 'Ln': return 1;
    case 'Log': return 1;
    default: return 8;
  }
}
export function divisionMultiplyByZero(num1:number, num2:number): boolean {
  if (num1 === 0 || num2 === 0) return true;
  return false;
}
export function isNegativeRadical(num1:number, num2:number): boolean {
  if (num1 < 0 || num2 < 0) return true;
  return false;
}
export function isOperator(s: string):boolean {
  if ((['+', '-', '/', '*', '**', '(', ')', '%', '√', 'Log', 'Ln'].includes(s))) return true;
  return false;
}
export function isUnaryOperator(s: string):boolean {
  if ((['2 **', '2.71 **', '10 **', '1 /', '2 √', '3 √', 'Ln', 'Log'].includes(s))) {
    return true;
  }
  return false;
}
export const translateIntoOPZ = (input:string):string[] => {
  let bracketsFlag = false;
  const str = input.split(' ').filter((n) => n);
  out.length = 0;
  operationStack.length = 0;
  str?.forEach((elem) => {
    if (isOperator(elem)) {
      if (elem.includes('(')) {
        bracketsFlag = true;
      }
      if (elem.includes(')')) {
        const id = operationStack.indexOf('(');
        const len = operationStack.length - 1;
        for (let i = len; i > id; i--) {
          out.push(operationStack?.pop() ?? '0');
        }
        operationStack.pop();
      } else if (getPriority(operationStack[operationStack.length - 1])
      <= getPriority(elem) && operationStack.length > 1 && !bracketsFlag) {
        out.push(operationStack.pop() ?? '0');
        operationStack.push(elem);
      } else {
        operationStack.push(elem);
      }
    } else {
      out.push(elem);
    }
  });
  return out.concat(operationStack.reverse());
};
export function calculateOPZ(input: string[]):string {
  let n1 = 0;
  let n2 = 0;
  let isNull = false;
  operationStack.splice(0, operationStack.length);
  input.forEach((elem) => {
    if (!Number.isNaN(Number(elem))) {
      operationStack.push(elem);
    } else {
      n2 = Number(operationStack.pop());
      n1 = Number(operationStack.pop());
      if (divisionMultiplyByZero(n1, n2) && '/*'.includes(elem)) {
        isNull = true;
      }
      if (isNegativeRadical(n1, n2) && '√'.includes(elem)) {
        isNull = true;
      }
      if (!isNull) {
        operationStack.push(String(performanceMathOperation(n1, n2, elem)));
      }
    }
  });
  if (isNull) {
    clearWithDelay();
    isNull = false;
  }
  return String(Number(operationStack.pop()).toFixed(3)) ?? '0';
}
export const calculateAllOperation = (str: string, calculator: Calculator):void => {
  calculator.executeCommand(new BaseOperationCommand(str));
  setDataFromDisplay(calculateOPZ(translateIntoOPZ(str)));
};
