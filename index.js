// id :: a -> a
exports.id = function (x) {
  return x;
};

/* Array operations */

// head :: [a] -> a
// Extract the first element of an array, which must be non-empty.
exports.head = function (xs) {
  if (process.env.NODE_ENV == "production") return xs[0];
  if (!Array.isArray(xs) && !(typeof xs == "string")) {
    throw new TypeError(
      `Helluva.js: head: Couldn't match expected type 'array', with actual type '${
        xs === null ? "null" : typeof xs
      }':\n           ${JSON.stringify(xs)}\n`
    );
  } else if (xs.length == 0) {
    throw "Helluva.js: head: empty array";
  } else {
    return xs[0];
  }
};

// prop :: String -> Object -> a
exports.prop = function (string) {
  if (typeof string != "string") {
    throw new TypeError(
      `Helluva.js: prop: Couldn't match expected type 'string', with actual type '${
        string === null
          ? "null"
          : Array.isArray(string)
          ? "array"
          : typeof string
      }':\n           ${JSON.stringify(string)}\n`
    );
  }

  return function (obj) {
    if (Array.isArray(obj) || typeof obj != "object" || obj === null) {
      throw new TypeError(
        `Helluva.js: prop: Couldn't match expected type 'object', with actual type '${
          obj === null ? "null" : Array.isArray(obj) ? "array" : typeof obj
        }':\n           ${JSON.stringify(obj)}\n`
      );
    }
    if (!obj.hasOwnProperty(string)) {
      throw `Object has not own property: ${string}`;
    }
    return obj[string];
  };
};
