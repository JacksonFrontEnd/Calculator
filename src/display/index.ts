import './index.scss';

export const Display = (root: HTMLElement): void => {
  const content = `
  <div class="display-container">
    <output class="display-field">0</output>
  </div>
  `;
  const renderContainer = document.createElement('div');
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};
