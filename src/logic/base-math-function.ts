export const performanceMathOperation = (a:number, b:number, elem:string):number => {
  switch (elem) {
    case '+': return a + b;
    case '-': return a - b;
    case '**': return a ** b;
    case '*': return a * b;
    case '/': return a / b;
    case '%': return a % b;
    case '√': return b ** (1 / a);
    default: return 0;
  }
};
