const { type } = require("../src/Function/type");

test.each([
  [ undefined, "undefined" ],
  [ null, "null" ],
  [ true, "boolean" ],
  [ false, "boolean" ],
  [ 4, "number" ],
  [ -94, "number" ],
  [ "", "string" ],
  [ "helluva", "string" ],
  [ Symbol(), "symbol" ],
  [ Symbol("helluva"), "symbol" ],
  [ 2n, "bigint" ],
  [ [], "array" ],
  [ [ 1, 2, 3 ], "array" ],
  [ x => x, "function" ],
  [ function () {}, "function" ],
  [ {}, "object" ],
  [ { a: 1, b: 2, c: 3 }, "object" ]

])("type", (a, expected) => {
  expect(type(a)).toBe(expected);
});
