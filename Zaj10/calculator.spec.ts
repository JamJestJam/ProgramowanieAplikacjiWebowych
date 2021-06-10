import { Calculator } from "./calculator";

describe("Calc", () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  it("should return correct sum of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Add(2, 2)).toEqual(4);
  });

  it("should return correct substract of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Substract(6, 2)).toEqual(4);
  });

  it("should return correct multiply of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Multiply(2, 2)).toEqual(4);
  });

  it("should return correct divide of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Divide(16, 4)).toEqual(4);
  });
});
