import { performanceMathOperation } from '../src/logic/base-math-function';
import { calculateOPZ, translateIntoOPZ } from '../src/logic/math-function';

describe('test all functions', () => {
  it('should return 15 for add(10,5)', () => {
    expect(performanceMathOperation(10, 5, '+')).toBe(15);
  });
  it('should return 2 for division(10,5)', () => {
    expect(performanceMathOperation(10, 5, '/')).toBe(2);
  });
  it('should return 334 for remainder_of_division(1111,777)', () => {
    expect(performanceMathOperation(1111, 777, '%')).toBe(334);
  });
  it('should return 6 for multiply(2,3)', () => {
    expect(performanceMathOperation(2, 3, '*')).toBe(6);
  });
  it('should return 4 for radical(2,16)', () => {
    expect(performanceMathOperation(2, 16, '√')).toBe(4);
  });
  it('should return 6 for pow(3,2)', () => {
    expect(performanceMathOperation(3, 2, '**')).toBe(9);
  });
});
describe('test opz function', () => {
  it('should return 22+ for TranslateIntoOPZ(2+2)', () => {
    expect(translateIntoOPZ('2 + 2').join('')).toBe('22+');
  });
  it('should return 222*+ for TranslateIntoOPZ(2+2*2)', () => {
    expect(translateIntoOPZ('2 + 2 * 2').join('')).toBe('222*+');
  });
  it('should return 6 for calculateOPZ(2+2*2)', () => {
    expect(calculateOPZ(translateIntoOPZ('2 + 2 * 2'))).toBe('6');
  });
});
