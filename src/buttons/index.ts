import {
  allOperation,
  baseOperation, buttonsArray, buttonsValuesArray, memoryArray, numbers,
} from '../const/const';
import './index.scss';

const generateButton = (name:string, value:string) => {
  const nameArr = name.split(' ');
  let content = '';
  let classes = 'button';
  let numberFlag = false;
  if (nameArr.length > 1) {
    if (nameArr.length === 3) {
      content = `<div class="sqrt">${nameArr[0]}</div>${nameArr[1] + nameArr[2]}`;
    } else if ('Log'.includes(nameArr[0])) {
      content = `${nameArr[0]}<div class="log">${nameArr[1]}</div>`;
    } else {
      content = `${nameArr[0]}<div class="pow">${nameArr[1]}</div>`;
    }
  } else {
    [content] = nameArr;
  }
  if (numbers.includes(nameArr[0]) && nameArr.length === 1) {
    classes += ' numbers';
    numberFlag = true;
  }
  if (allOperation.join(' ').includes(nameArr[0]) && nameArr.length > 1) {
    classes += ' operators';
  }
  if (baseOperation.includes(nameArr[0])) {
    classes += ' operators orange';
  }
  if ('='.includes(nameArr[0])) {
    classes += ' orange equal';
  }
  if (memoryArray.includes(nameArr[0])) {
    classes += ' memory-operators';
  }
  if ('AC'.includes(nameArr[0])) {
    classes += ' reset-button';
  }
  if ('<'.includes(nameArr[0])) {
    classes += ' back-button';
  }
  if ('Ln.Log10'.includes(nameArr[0]) && !numberFlag) {
    classes += ' operators';
  }
  if (nameArr.length === 0) {
    classes = 'button';
  }
  return `<button class="${classes}" value="${value}">${content}</button>`;
};
const renderButtons = () => {
  let res = '';
  buttonsArray.forEach((element, i) => {
    res += generateButton(element, buttonsValuesArray[i]);
  });
  return res;
};
export const Buttons = (root: HTMLElement): void => {
  const result = renderButtons();
  const content = `
  <div class="buttons-container">
    <div class="base-operation">
    ${result}
    </div>
  </div>
  `;
  const renderContainer = document.createElement('div');
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};
