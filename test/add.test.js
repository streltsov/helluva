const { add } = require("../src/Function/add");

test.each([
  null,
  true,
  "string",
  {},
  { helluva: "js" },
  [],
  [ 1, 2, 3 ],
  new Date,
  Symbol("helluva")
])("should throw an exception", a => {

  expect(() => {
    add(a)(4);
  }).toThrow(`Helluva.js: add: Expected type "number" as first argument, instead got "${typeof a}"`);

  expect(() => {
    add(4)(a);
  }).toThrow(`Helluva.js: add: Expected type "number" as second argument, instead got "${typeof a}"`);

});

test("shoud throw an exception if no argument provided", () => {

  expect(() => {
    add(1)();
  }).toThrow("Helluva.js: add: Expected one argument but received zero arguments");

  expect(() => {
    add()(1);
  }).toThrow("Helluva.js: id: Expected one argument but received zero arguments");

});

test.each([
  [ 1, 1, 2 ],
  [ 1, 2, 3 ],
  [ 2, 1, 3 ]
])("add(%i)(%i)", (a, b, expected) => {
  expect(add(a)(b)).toBe(expected);
});
