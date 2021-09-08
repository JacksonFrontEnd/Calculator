export const operationStack:string[] = [];
export const out:string[] = [];
export const buttonsArray:string[] = ['(', ')', 'MC', 'M+', 'AC', '+/-',
  '%', '/', 'M-', 'MR', '2 nd', 'x 2', '7', '8', '9', '*', 'x 3', 'x y',
  'e x', '10 x', '4', '5', '6', '-', '1/x', '2 √ x', '3 √ x', 'y √ x',
  '1', '2', '3', '+', 'Ln ', '<', 'Log10 ', '✕', '✕', '0', '.', '='];
export const buttonsValuesArray:string[] = ['(', ')', 'MC', 'M+', 'AC', ' * -1',
  '%', '/', 'M-', 'MR', '2 **', ' ** 2', '7', '8', '9', '*', ' ** 3', '**',
  '2.71 **', '10 **', '4', '5', '6', '-', '1 /', '2 √', '3 √', '√',
  '1', '2', '3', '+', ' Ln ', '<', ' Log ', 'disabled', 'disabled', '0', '.', '='];
export const buttonsNumber = 40;
export const baseOperation = '+-*/%';
export const allOperation = ['(', ')', '+/-', '%', '/', '2 nd', 'x 2', '*', 'x 3', 'x y',
  'e x', '10 x', '-', '1/x', '2 √ x', '3 √ x', 'y √ x', '+', 'Ln', '='];
export const numbers = '0123456789';
export const memoryArray = ['MC', 'M+', 'M-', 'MR'];
