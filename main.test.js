const { stringLength, reverseString, capitalize } = require('./main.js');

test("String Length", () => {
    expect(stringLength("Hello")).toBe(5);
});

test("Reverse", () => {
    expect(reverseString("I need a Pepsi")).toBe("ispeP a deen I");
  });

test("Capitalize", () => {
  expect(capitalize("no")).toBe("No");
});