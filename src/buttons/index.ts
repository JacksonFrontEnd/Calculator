import './index.scss';

export const Buttons = (root: HTMLElement): void => {
  const content = `
  <div class="buttons-container">
    <div>
      <div class="custom-operation">
        <button class="button operators">(</button>
        <button class="button operators">)</button>
        <button class="button memory-operators">MC</button>
        <button class="button memory-operators">M+</button>
        <button class="button memory-operators">M-</button>
        <button class="button memory-operators">MR</button>
        <button class="button unary-operators">2<div class="pow">nd</div></button>
        <button class="button unary-operators">x<div class="pow">2</div></button>
        <button class="button unary-operators">x<div class="pow">3</div></button>
        <button class="button operators" value="**">^</button>
        <button class="button unary-operators">e<div class="pow">x</div></button>
        <button class="button unary-operators">10<div class="pow">x</div></button>
        <button class="button unary-operators">1/x</button>
        <button class="button unary-operators"><div class="sqrt">2</div>√x</button>
        <button class="button unary-operators"><div class="sqrt">3</div>√x</button>
        <button class="button operators"><div class="sqrt">y</div>√x</button>
      </div>
      <div class="operation-last">
        <button class="button big unary-operators">Ln</button>
        <button class="button big unary-operators">Log<div class="log">10</div></button>
      </div>
    </div>
    <div>
      <div class="base-operation">
        <button class="button unary-operators">AC</button>
        <button class="button unary-operators">+/-</button>
        <button class="button operators">%</button>
        <button class="button orange operators">/</button>
        <button class="button numbers">7</button>
        <button class="button numbers">8</button>
        <button class="button numbers" id="nine">9</button>
        <button class="button orange operators">*</button>
        <button class="button numbers">4</button>
        <button class="button numbers">5</button>
        <button class="button numbers">6</button>
        <button class="button orange operators">-</button>
        <button class="button numbers">1</button>
        <button class="button numbers">2</button>
        <button class="button numbers">3</button>
        <button class="button orange operators">+</button>
      </div>
      <div class="operation-last">
        <button class="button big numbers">0</button>
        <button class="button numbers operators">.</button>
        <button class="button orange equal">=</button>
      </div>
    </div>
  </div>
  `;
  const renderContainer = document.createElement('div');
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};
