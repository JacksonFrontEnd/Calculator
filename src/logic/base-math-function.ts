export const performanceMathOperation = (a:number, b:number, elem:string):number => {
  switch (elem) {
    case '+': return a + b;
    case '-': return a - b;
    case '**': return a ** b;
    case '*': return a * b;
    case '/': return a / b;
    case '%': return a % b;
    case '√': return b ** (1 / a);
    case 'Ln': return Math.log(b);
    case 'Log': return Math.log10(b);
    default: return 0;
  }
};
