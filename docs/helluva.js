function id(a) {
  return a;
}

function head(xs) {
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
}
