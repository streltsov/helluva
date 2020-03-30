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
