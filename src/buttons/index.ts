import {
  allOperation,
  baseOperation, buttonsArray, buttonsValuesArray, memoryArray, numbers,
} from '../const/const';
import './index.scss';

const generateButton = (name:string, value:string) => {
  const nameArr = name.split(' ');
  let content = '';
  let classes = 'button';
  if (nameArr.length > 1) {
    if (nameArr.length === 3) {
      content = `<div class="sqrt">${nameArr[0]}</div>${nameArr[1] + nameArr[2]}`;
    } else if ('Log'.indexOf(nameArr[0]) !== -1) {
      content = `${nameArr[0]}<div class="log">${nameArr[1]}</div>`;
    } else {
      content = `${nameArr[0]}<div class="pow">${nameArr[1]}</div>`;
    }
  } else {
    content = nameArr[0];
  }
  if (numbers.indexOf(nameArr[0]) !== -1 && nameArr.length === 1) {
    classes += ' numbers';
  }
  if (allOperation.join(' ').indexOf(nameArr[0]) !== -1 && nameArr.length > 1) {
    classes += ' operators';
  }
  if (baseOperation.indexOf(nameArr[0]) !== -1) {
    classes += ' operators orange';
  }
  if ('='.indexOf(nameArr[0]) !== -1) {
    classes += ' orange equal';
  }
  if (memoryArray.indexOf(nameArr[0]) !== -1) {
    classes += ' memory-operators';
  }
  if ('AC'.indexOf(nameArr[0]) !== -1) {
    classes += ' reset-button';
  }
  if ('<'.indexOf(nameArr[0]) !== -1) {
    classes += ' back-button';
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
  console.log(result);
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
