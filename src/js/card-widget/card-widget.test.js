/**
 * @jest-environment jsdom
 */
import isValid from "../validation";

const fixture = [
  ["visa", ["4556473415123693", "4532946216209471", "4716758491126613704"]],
  ["mastercard", ["2720996419031806", "5250585265988051", "5306665135126159"]],
  [
    "american-express",
    ["340593582600808", "343243873632329", "375297249082545"],
  ],
  ["jcb", ["3533833300850819", "3534794536645580", "3539308220169246938"]],
  ["mir", ["2201449796032631", "2200720101432661", "2201486685366092"]],
  [undefined, ["30569309025904", "6011111111111117"]],
];

test.each(fixture)("%s", (name, numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const { result, type } = isValid(numbers[i]);
    expect(result).toBe(true);
    expect(type).toBe(name);
  }
});
