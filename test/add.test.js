const { add } = require("../src/Function/add");

test.each([
  [ 1, 1, 2 ],
  [ 1, 2, 3 ],
  [ 2, 1, 3 ]
])("add(%i)(%i)", (a, b, expected) => {
  expect(add(a)(b)).toBe(expected);
});
