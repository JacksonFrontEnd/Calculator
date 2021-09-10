import { Calculator } from '../command/calculator';

export type TwoNumbers = {
  num1:number,
  num2:number,
};
export type TwoNumbersAndOperator = {
  num1:number,
  num2:number,
  operator:string,
};
export type GenerateButtonType = {
  content: string
  value: string
  classes: string
};
export type CalculateType = {
  str: string,
  calculator: Calculator
};
