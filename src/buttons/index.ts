import "./index.scss";

export const Buttons = (root: HTMLElement): void => {
  const content = `
  <div class="buttons-container">
    <div>
      <div class="custom-operation">
        <button class="button">(</button>
        <button class="button">)</button>
        <button class="button">mc</button>
        <button class="button">m+</button>
        <button class="button">m-</button>
        <button class="button">mr</button>
        <button class="button">2nd</button>
        <button class="button">x2</button>
        <button class="button">x3</button>
        <button class="button">xy</button>
        <button class="button">ex</button>
        <button class="button">10x</button>
        <button class="button">1/x</button>
        <button class="button">√x</button>
        <button class="button">√x</button>
        <button class="button">3√x</button>
      </div>
      <div class="operation-last">
        <button class="button big">y√x</button>
        <button class="button">Ln</button>
        <button class="button">Log10</button>
      </div>
    </div>
    <div>
      <div class="base-operation">
        <button class="button">AC</button>
        <button class="button">+/-</button>
        <button class="button">%</button>
        <button class="button orange">/</button>
        <button class="button numbers">7</button>
        <button class="button numbers">8</button>
        <button class="button numbers">9</button>
        <button class="button orange">*</button>
        <button class="button numbers">4</button>
        <button class="button numbers">5</button>
        <button class="button numbers">6</button>
        <button class="button orange">-</button>
        <button class="button numbers">1</button>
        <button class="button numbers">2</button>
        <button class="button numbers">3</button>
        <button class="button orange">+</button>
      </div>
      <div class="operation-last">
        <button class="button big numbers">0</button>
        <button class="button numbers">,</button>
        <button class="button orange">=</button>
      </div>
    </div>
  </div>
  `;
  const renderContainer = document.createElement("div");
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};