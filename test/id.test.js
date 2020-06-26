const { id } = require("../src/Function/id");

test.each([
  null,
  undefined,
  true,
  100,
  -400,
  "string",
  {},
  { helluva: "js" },
  [],
  [ 1, 2, 3 ],
  new Date,
  Infinity,
  Symbol("helluva"),
  9007199254740992n
])("should return %p", a => expect(id(a)).toBe(a));
