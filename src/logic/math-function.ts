import { stack, out } from '../const/const';

export function getPriority(s: string):number {
  switch (s) {
    case '(': return 5;
    case ')': return 4;
    case '+': return 3;
    case '-': return 3;
    case '/': return 2;
    case '*': return 2;
    case '^': return 1;
    default: return 8;
  }
}
export function divisionMultiplyByZero(num1:number, num2:number):boolean {
  if (num1 === 0 || num2 === 0) return true;
  return false;
}
export function isOperator(s: string):boolean {
  if (('+-/*^()'.indexOf(s) !== -1)) return true;
  return false;
}
export const getDataFromDisplay = (): string | null => {
  const DISPLAY = document.querySelector('.display-field') as HTMLOutputElement;
  return DISPLAY.textContent;
};
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
  setDataFromDisplay('недопустимое выражение');
  setTimeout(clearDisplay, 1500);
};
export const translateIntoOPZ = (input:string):string[] => {
  let bracketsFlag = false;
  const str = input.split(' ');
  str?.forEach((elem) => {
    if (isOperator(elem)) {
      if (elem.indexOf('(') !== -1) {
        bracketsFlag = true;
      }
      if (elem.indexOf(')') !== -1) {
        while (stack[stack.length - 1].indexOf('(') === -1) {
          out.push(stack?.pop() ?? '0');
        }
        stack.pop();
      } else if (getPriority(stack[stack.length - 1]) <= getPriority(elem) && stack.length > 1 && !bracketsFlag) {
        out.push(stack.pop() ?? '0');
        stack.push(elem);
      } else {
        stack.push(elem);
      }
    } else {
      out.push(elem);
    }
  });
  return out.concat(stack.reverse());
};
export function calculateOPZ(input: string[]):string {
  let n1 = 0;
  let n2 = 0;
  let res = 0;
  let isNull = false;
  stack.splice(0, stack.length);
  input.forEach((elem) => {
    if (!Number.isNaN(Number(elem))) {
      stack.push(elem);
    } else {
      n2 = Number(stack.pop());
      n1 = Number(stack.pop());
      if (divisionMultiplyByZero(n1, n2) && '*/'.indexOf(elem) !== -1) {
        isNull = true;
      }
      if (!isNull) {
        switch (elem) {
          case '+': res = n1 + n2; break;
          case '-': res = n1 - n2; break;
          case '^': res = n1 ** n2; break;
          case '*': res = n1 * n2; break;
          case '/': res = n1 / n2; break;
          default: break;
        }
      }
      stack.push(String(res));
    }
  });
  if (isNull) {
    setDataFromDisplay('недопустимое выражение');
    setTimeout(() => '0', 1500);
    isNull = false;
  } else {
    return stack.pop() ?? '0';
  }
  return '0';
}
export const calculateBaseOperation = (str: string):void => {
  setDataFromDisplay(calculateOPZ(translateIntoOPZ(str)));
};
module.exports = calculateBaseOperation;
