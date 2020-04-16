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

function prop(string) {
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
}
