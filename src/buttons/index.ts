import './index.scss';

export const Buttons = (root: HTMLElement): void => {
  const content = `
  <div class="buttons-container">
    <div>
      <div class="custom-operation">
        <button class="button" value="(">(</button>
        <button class="button" value=")">)</button>
        <button class="button" value="MC">MC</button>
        <button class="button" value="M+" >M+</button>
        <button class="button" value="M-" >M-</button>
        <button class="button" value="MR">MR</button>
        <button class="button" value="2**">2<div class="pow">nd</div></button>
        <button class="button" value="**2">x<div class="pow">2</div></button>
        <button class="button" value="**3">x<div class="pow">3</div></button>
        <button class="button" value="**">x<div class="pow">y</div></button>
        <button class="button" value="e**">e<div class="pow">x</div></button>
        <button class="button" value="10**">10<div class="pow">x</div></button>
        <button class="button" value="1/x">1/x</button>
        <button class="button" value="sqrt_x_2"><div class="sqrt">2</div>√x</button>
        <button class="button" value="sqrt_x_3"><div class="sqrt">3</div>√x</button>
        <button class="button" value="sqrt_x_y"><div class="sqrt">y</div>√x</button>
      </div>
      <div class="operation-last">
        <button class="button big" value="Ln">Ln</button>
        <button class="button big" value="log10">Log<div class="log">10</div></button>
      </div>
    </div>
    <div>
      <div class="base-operation">
        <button class="button" value="AC">AC</button>
        <button class="button" value="+/-">+/-</button>
        <button class="button" value="%">%</button>
        <button class="button orange" value="/">/</button>
        <button class="button numbers" value="7">7</button>
        <button class="button numbers" value="8">8</button>
        <button class="button numbers" value="9" id="nine">9</button>
        <button class="button orange" value="*">*</button>
        <button class="button numbers" value="4">4</button>
        <button class="button numbers" value="5">5</button>
        <button class="button numbers" value="6">6</button>
        <button class="button orange" value="-">-</button>
        <button class="button numbers" value="1">1</button>
        <button class="button numbers" value="2">2</button>
        <button class="button numbers" value="3">3</button>
        <button class="button orange" value="+">+</button>
      </div>
      <div class="operation-last">
        <button class="button big numbers" value="0">0</button>
        <button class="button numbers" value=",">,</button>
        <button class="button orange" value="=">=</button>
      </div>
    </div>
  </div>
  `;
  const renderContainer = document.createElement('div');
  renderContainer.innerHTML = content;
  root?.appendChild(renderContainer);
};
