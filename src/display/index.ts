import "./index.scss";

export const Display = (root: HTMLElement): void => {
  const content = `
  <div class="display-container">
    <p class="display-field">0</p>
  </div>
  `;
  const renderContainer = document.createElement("div");
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};