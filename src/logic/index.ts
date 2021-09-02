// import { stack } from '../const/const';

export function delegationWrapper(): void {
  const DISPLAY = document.querySelector(
    '.display-field',
  ) as HTMLParagraphElement;
  let isFirstClick = true;
  // const result = 0;
  let memory = 0;
  function clearDisplay() {
    DISPLAY.innerHTML = '0';
  }
  /* function sum() {
    isOperand = true;
    if (stack.length === 2) {
      result = stack[0] + stack[1];
      stack.splice(0, stack.length);
      stack.push(result);
      DISPLAY.innerHTML = `${result}`;
    } else {
      stack.push(parseInt(DISPLAY.innerHTML, 10));
    }
  }
  function sub() {
    isOperand = true;
    if (stack.length === 2) {
      result = stack[0] - stack[1];
      stack.splice(0, stack.length);
      stack.push(result);
      DISPLAY.innerHTML = `${result}`;
    } else {
      stack.push(parseInt(DISPLAY.innerHTML, 10));
    }
  } */
  function calculate(value: string) {
    switch (value) {
      /* case '=': {
      } break; */
      case 'AC':
        DISPLAY.textContent = '0';
        isFirstClick = true;
        break;
      case 'MR': DISPLAY.textContent = String(memory); break;
      case 'MC': memory = 0; break;
      case 'M+': memory += Number(DISPLAY.textContent); break;
      case 'M-': memory -= Number(DISPLAY.textContent); break;
      case '2**':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(2 ** Number(DISPLAY.textContent));
        } break;
      case '**2':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 2);
        } break;
      case '**3':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 3);
        } break;
        /* case '**':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(2 ** Number(DISPLAY.textContent));
        } break; */
      case 'e**': DISPLAY.textContent = String(2.71 ** Number(DISPLAY.textContent)); break;
      case '10**': DISPLAY.textContent = String(10 ** Number(DISPLAY.textContent)); break;
      case '1/x': DISPLAY.textContent = String(1 / Number(DISPLAY.textContent)); break;
      case 'sqrt_x_2': DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 1 / 2); break;
      case 'sqrt_x_3': DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 1 / 3); break;
      /* case 'sqrt_x_y':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 1 / 2);
        } break; */
      case 'Ln': DISPLAY.textContent = String(Math.log(Number(DISPLAY.textContent))); break;
      case 'log10': DISPLAY.textContent = String(Math.log10(Number(DISPLAY.textContent))); break;
      case '+/-':
        if (Number.isNaN(Number(DISPLAY.textContent))) {
          DISPLAY.textContent = 'Изменить знак можно только у 1 числа';
          setTimeout(clearDisplay, 1500);
        } else {
          DISPLAY.textContent = String(-(Number(DISPLAY.textContent)));
        } break;
      default:
        if (isFirstClick) {
          DISPLAY.innerHTML = '';
          isFirstClick = false;
        } DISPLAY.textContent += value; break;
    }
  }
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', function eventListener() {
      calculate(this.value);
    });
  });
}

function parseCalculationString(s:string) {
  const calculation = [];
  let current = '';
  for (let i = 0, ch; s.length !== i; i++) {
    ch = s.charAt(i);
    if ('^*/+-'.indexOf(ch) > -1) {
      if (current === '' && ch === '-') {
        current = '-';
      } else {
        calculation.push(parseFloat(current), ch);
        current = '';
      }
    } else {
      current += s.charAt(i);
    }
  }
  if (current !== '') {
    calculation.push(parseFloat(current));
  }
  return calculation;
}

function OPZ(calc:Array<string> | Array<number>) {
  const ops = [{ '^': (a:number, b:number) => a ** b },
    { '*': (a:number, b:number) => a * b, '/': (a:number, b:number) => a / b, '%': (a:number, b:number) => a % b },
    { '+': (a:number, b:number) => a + b, '-': (a:number, b:number) => a - b }];
  let newCalc:Array<string> | Array<number> = [];
  let currentOp;
  let result:Array<string> | Array<number> = [];
  for (let i = 0; i < ops.length; i++) {
    for (let j = 0; j < calc.length; j++) {
      if (ops[i][calc[j]]) {
        currentOp = ops[i][calc[j]];
      } else if (currentOp) {
        newCalc[newCalc.length - 1] = currentOp(newCalc[newCalc.length - 1], calc[j]);
        currentOp = null;
      } else {
        newCalc.push(calc[j]);
      }
      console.log(newCalc);
    }
    result = newCalc;
    newCalc = [];
  }
  if (result.length > 1) {
    console.log('Error: unable to resolve calculation');
    return result;
  }
  return result[0];
}
