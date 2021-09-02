import { stack } from '../const/const';

export function delegationWrapper(): void {
  const DISPLAY = document.querySelector(
    '.display-field',
  ) as HTMLParagraphElement;
  let isFirstClick = true;
  let isOperand = false;
  let result = 0;
  let memory = 0;
  function clearDisplay() {
    DISPLAY.innerHTML = '';
  }
  function sum() {
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
  }
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
      case 'e**':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(2.71 ** Number(DISPLAY.textContent));
        } break;
      case '10**':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(10 ** Number(DISPLAY.textContent));
        } break;
      case '1/x':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(1 / Number(DISPLAY.textContent));
        } break;
      case 'sqrt_x_2':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 1 / 2);
        } break;
      case 'sqrt_x_3':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 1 / 3);
        } break;
      /* case 'sqrt_x_y':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Number(DISPLAY.textContent) ** 1 / 2);
        } break; */
      case 'Ln':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Math.log(Number(DISPLAY.textContent)));
        } break;
      case 'log10':
        if (DISPLAY.textContent === '') {
          DISPLAY.textContent = 'недопустимое выражение';
        } else {
          DISPLAY.textContent = String(Math.log10(Number(DISPLAY.textContent)));
        } break;
      default:
        if (isFirstClick) {
          clearDisplay();
          isFirstClick = false;
        } DISPLAY.textContent += value; break;
    }
  }
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', function () {
      calculate(this.value);
    });
  });
}
