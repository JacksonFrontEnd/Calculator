import calculateBaseOperation from '../src/logic/math-function';

test('adds 1 + 2 to equal 3', () => {
  expect(calculateBaseOperation(1, 2)).toBe(3);
});
