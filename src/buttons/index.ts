import { GenerateButtonType } from '../utils/types';
import { btns } from './config';
import './index.scss';

const generateButton = ({ content, value, classes }: GenerateButtonType) => `
<button class="button ${classes}" value="${value}">${content}</button>`;
const renderButtons = () => {
  let res = '';
  btns.forEach((element) => {
    res += generateButton(element);
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
