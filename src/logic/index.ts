export function delegationWrapper(): void {
  const DISPLAY = document.querySelector('.display-field') as HTMLOutputElement;
  const UNARY_OPERATORS = document.querySelectorAll('.unary-operators');
  const OPERATORS = document.querySelectorAll('.operators');
  const NUMBERS = document.querySelectorAll('.numbers');
  const MEMORY_OPERATORS = document.querySelectorAll('.memory-operators');
  const EQUAL = document.querySelector('.equal') as HTMLElement;
  let clearFlag = true;
  let memory = 0;
  function clearDisplay() {
    DISPLAY.value = '0';
    clearFlag = true;
  }
  function getPriority(s: string) {
    switch (s) {
      case '(': return 0;
      case ')': return 0;
      case '+': return 3;
      case '-': return 3;
      case '*': return 2;
      case '/': return 2;
      case '^': return 1;
      default: return 4;
    }
  }
  function isOperator(s: string) {
    if (('+-/*^()'.indexOf(s) !== -1)) return true;
    return false;
  }
  function IsDelimeter(c: string) {
    if ((' ='.indexOf(c) !== -1)) return true;
    return false;
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
  const evaluate = (element:string) => {
    const stack:string[] = [];
    const out:string[] = [];
    const temp = element;
    const str = temp.split(' ');
    str?.forEach((elem) => {
      if (isOperator(elem)) {
        stack.push(elem);
        if (elem === ')') {
          const id1 = stack.indexOf('(');
          const id2 = stack.indexOf(')');
          for (let i = id1; i < id2; i++) {
            out.push(stack[i]);
          }
          stack.splice(id1, stack.length - id1);
        } else if (getPriority(stack[stack.length - 1]) >= getPriority(elem) && stack.length > 1) {
          out.push(stack.pop()!);
          console.log(elem);
          stack.push(elem);
        }
      } else {
        out.push(elem);
      }
    });
    return out.concat(stack.reverse());
  };
  function performanceOperation() {
    alert(evaluate('3 + 4 * 2 / ( 1 - 5 ) ^ 2'));
  }
  function performanceUnaryOperation(unary: string) {
    const number = Number(DISPLAY.value);
    switch (unary) {
      case '2nd':
        DISPLAY.textContent = String(2 ** number);
        break;
      case 'x2':
        DISPLAY.textContent = String(number ** 2);
        break;
      case 'x3':
        DISPLAY.textContent = String(number ** 3);
        break;
      case 'ex':
        DISPLAY.textContent = String(2.71 ** number);
        break;
      case '10x':
        DISPLAY.textContent = String(10 ** number);
        break;
      case '1/x':
        if (number === 0) {
          DISPLAY.textContent = 'недопустимое выражение';
          setTimeout(clearDisplay, 1500);
        } else {
          DISPLAY.textContent = String(1 / number);
        }
        break;
      case '2√x':
        if (number < 0) {
          DISPLAY.textContent = 'недопустимое выражение';
          setTimeout(clearDisplay, 1500);
        } else {
          DISPLAY.textContent = String(number ** 1 / 2);
        } break;
      case '3√x':
        if (number < 0) {
          DISPLAY.textContent = 'недопустимое выражение';
          setTimeout(clearDisplay, 1500);
        } else {
          DISPLAY.textContent = String(number ** 1 / 3);
        } break;
      case 'Ln':
        DISPLAY.textContent = String(Math.log(number));
        break;
      case 'Log10':
        DISPLAY.textContent = String(Math.log10(number));
        break;
      case '+/-':
        if (Number.isNaN(number)) {
          DISPLAY.textContent = 'Изменить знак можно только у 1 числа';
          setTimeout(clearDisplay, 1500);
        } else {
          DISPLAY.textContent = String(-number);
        }
        break;
      case 'AC':
        DISPLAY.textContent = '0';
        clearFlag = true;
        break;
      default:
        break;
    }
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
      const input = e.target as HTMLElement;
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
/* if (DISPLAY.value !== stack[0]) {
      stack.push(DISPLAY.value);
    }
    stack.push(operation);
    if (stack.length >= 4) {
      if()
      switch (stack[1]) {
        case 'xy':
          if (Number(stack[0]) === 0) {
            DISPLAY.textContent = 'недопустимое выражение';
            setTimeout(clearDisplay, 1500);
          } else {
            DISPLAY.textContent = `${Number(stack[0]) ** Number(stack[2])}`;
          }
          break;
        case 'y√x':
          if (Number(stack[0]) === 0 || Number(stack[2])) {
            DISPLAY.textContent = 'недопустимое выражение';
            setTimeout(clearDisplay, 1500);
          } else {
            DISPLAY.textContent = `${Number(stack[0]) ** 1 / Number(stack[2])}`;
          }
          break;
        case '+':
          DISPLAY.textContent = `${Number(stack[0]) + Number(stack[2])}`;
          clearFlag = true;
          break;
        case '-':
          DISPLAY.textContent = `${Number(stack[0]) - Number(stack[2])}`;
          clearFlag = true;
          break;
        case '/':
          if (Number(stack[0]) === 0 || Number(stack[2]) === 0) {
            DISPLAY.textContent = 'недопустимое выражение';
            setTimeout(clearDisplay, 1500);
          } else {
            DISPLAY.textContent = `${Number(stack[0]) / Number(stack[2])}`;
            clearFlag = true;
          } break;
        case '*':
          if (Number(stack[0]) === 0 || Number(stack[2]) === 0) {
            DISPLAY.textContent = 'недопустимое выражение';
            setTimeout(clearDisplay, 1500);
          } else {
            DISPLAY.textContent = `${Number(stack[0]) * Number(stack[2])}`;
            clearFlag = true;
          } break;
        default: break;
      }
    }
    if (stack[1] === stack[2] || stack[1] === '=') {
      stack.splice(1, 1);
    } else if (stack.length >= 3) {
      stack.splice(0, 3);
      stack.unshift(DISPLAY.textContent!);
    }
    clearFlag = true; */
}
