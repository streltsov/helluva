const { empty } = require("../src/Array/empty");
const { type } = require("../src/Function/type");

test.each([
  [ "", true ],
  [ [], true ],
  [ {}, true ],
  [ "helluva", false ],
  [ [ "helluva" ], false ],
  [ { "helluva": "JavaScript" }, false ]
])("Checks %p for emptyness", (a, expected) => expect(empty(a)).toBe(expected));
