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

/* Object operations */

// props :: [String] -> Object -> a
exports.props = function (xs) {
  if (!Array.isArray(xs)) {
    throw new TypeError(
      `Helluva.js: props: Couldn't match expected type 'array', with actual type '${
        xs === null ? "null" : typeof xs
      }':\n           ${JSON.stringify(xs)}\n`
    );
  }
  if (xs.some(el => typeof el != "string")) {
    throw new TypeError("Array must contain strings only");
  }
  return function (obj) {
    if (Array.isArray(obj) || typeof obj != "object" || obj === null) {
      throw new TypeError(
        `Helluva.js: props: Couldn't match expected type 'object', with actual type '${
          obj === null ? "null" : Array.isArray(obj) ? "array" : typeof obj
        }':\n           ${JSON.stringify(obj)}\n`
      );
    }
    if (!obj.hasOwnProperty(xs[0])) {
      throw `Object has not own property: ${xs[0]}`;
    }
    return xs.length != 1 ? props(xs.slice(1))(obj[xs[0]]) : obj[xs[0]];
  };
};
