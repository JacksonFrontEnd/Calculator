export function delegationWrapper(): void {
  const DISPLAY = document.querySelector('.display-field') as HTMLOutputElement;
  const UNARY_OPERATORS = document.querySelectorAll('.unary-operators');
  const OPERATORS = document.querySelectorAll('.operators');
  const NUMBERS = document.querySelectorAll('.numbers');
  const MEMORY_OPERATORS = document.querySelectorAll('.memory-operators');
  const EQUAL = document.querySelector('.equal') as HTMLElement;
  let clearFlag = true;
  let isNull = false;
  let str = [];
  let memory = 0;
  let bracketsFlag = false;
  const stack:string[] = [];
  const out:string[] = [];
  function clearDisplay() {
    DISPLAY.value = '0';
    clearFlag = true;
  }
  function isOperator(s: string) {
    if (('+-/*^()'.indexOf(s) !== -1)) return true;
    return false;
  }
  function divisionMultiplyByZero(num1:number, num2:number) {
    if (num1 === 0 || num2 === 0) return true;
    return false;
  }
  function getPriority(s: string) {
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
  function printSymbol(symbol: string) {
    if (clearFlag) {
      DISPLAY.innerHTML = '';
      clearFlag = false;
    }
    if (isOperator(symbol)) {
      DISPLAY.textContent! += ` ${symbol} `;
    } else DISPLAY.textContent! += symbol;
  }
  const evaluate = () => {
    str = DISPLAY.textContent!.split(' ');
    str?.forEach((elem) => {
      if (isOperator(elem)) {
        if (elem.indexOf('(') !== -1) {
          bracketsFlag = true;
        }
        if (elem.indexOf(')') !== -1) {
          while (stack[stack.length - 1].indexOf('(') === -1) {
            out.push(stack.pop()!);
          }
          stack.pop();
        } else if (getPriority(stack[stack.length - 1]) <= getPriority(elem) && stack.length > 1 && !bracketsFlag) {
          out.push(stack.pop()!);
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
  function calculate(input: string[]) {
    let n1;
    let n2;
    let res = 0;
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
      DISPLAY.textContent = 'недопустимое выражение';
      setTimeout(clearDisplay, 1500);
      isNull = false;
    } else {
      DISPLAY.textContent = stack.pop()!;
    }
  }
  function performanceOperation() {
    calculate(evaluate());
  }
  function performanceUnaryOperation(unary: string) {
    str = DISPLAY.textContent!.split(' ');
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
          DISPLAY.textContent = 'недопустимое выражение';
          setTimeout(clearDisplay, 1500);
        } else {
          str[str.length - 1] = String(1 / number);
        }
        break;
      case '2√x':
        if (number < 0) {
          DISPLAY.textContent = 'недопустимое выражение';
          setTimeout(clearDisplay, 1500);
        } else {
          str[str.length - 1] = String(number ** 1 / 2);
        } break;
      case '3√x':
        if (number < 0) {
          DISPLAY.textContent = 'недопустимое выражение';
          setTimeout(clearDisplay, 1500);
        } else {
          str[str.length - 1] = String(number ** 1 / 3);
        } break;
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
        clearFlag = true;
        break;
      default: break;
    }
    DISPLAY.textContent = str.join(' ');
  }
  function perfomanceMemoryOperation(memory_operation: string) {
    const number = Number(DISPLAY.value);
    switch (memory_operation) {
      case 'MR':
        DISPLAY.textContent = String(memory);
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
  }
  for (let i = 0; i < NUMBERS.length; i++) {
    const number = NUMBERS[i];
    number.addEventListener('click', (e) => {
      const input = e.target as HTMLButtonElement;
      printSymbol(input.textContent!);
    });
  }

  for (let i = 0; i < OPERATORS.length; i++) {
    const operationBtn = OPERATORS[i];
    operationBtn.addEventListener('click', (e) => {
      const input = e.target as HTMLElement;
      printSymbol(input.textContent!);
    });
  }
  for (let i = 0; i < UNARY_OPERATORS.length; i++) {
    const operationBtn = UNARY_OPERATORS[i];
    operationBtn.addEventListener('click', (e) => {
      const input = e.target as HTMLElement;
      performanceUnaryOperation(input.textContent!);
    });
  }
  for (let i = 0; i < MEMORY_OPERATORS.length; i++) {
    const operationBtn = MEMORY_OPERATORS[i];
    operationBtn.addEventListener('click', (e) => {
      const input = e.target as HTMLElement;
      perfomanceMemoryOperation(input.textContent!);
    });
  }
  EQUAL.addEventListener('click', () => {
    performanceOperation();
  });
}
