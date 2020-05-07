/* Helluva.js */
/* Yet another functional programming library */

/* Function */

// id :: a -> a
exports.id = function (x) {
  return x;
};

// inc :: Number -> Number
exports.inc = function (num) {
  if (process.env.NODE_ENV == "production") return xs[0];
  if (typeof num != 'number') {
    throw new TypeError(
      `Helluva.js: inc: Couldn't match expected type 'number', with actual type '${
        num === null ? "null" : Array.isArray(num) ? 'array' : typeof num
      }':\n           ${JSON.stringify(num)}\n`
    );
  }
  return num + 1;
};

/* Array */

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

// range :: Number -> Number -> [Number]
// Creates an array containing a range of integers, including both endpoints.
exports.range = function (f) {
  if (process.env.NODE_ENV == "production") {
    return function (l) {
      if (typeof l != "number") {
        throw new TypeError(
          `Helluva.js: range: Couldn't match expected type 'number', with actual type '${
            l === null ? "null" : Array.isArray(l) ? "array" : typeof l
          }':\n           ${JSON.stringify(l)}\n`
        );
      }

      let res = [];
      if (f == l) {
        res.push(f);
      } else if (f < l) {
        for (let i = f; i < l + 1; i++) {
          res.push(i);
        }
      } else if (f > l) {
        for (let i = f; i > l - 1; i--) {
          res.push(i);
        }
      }

      return res;
    };
  }

  if (typeof f != "number") {
    throw new TypeError(
      `Helluva.js: range: Couldn't match expected type 'number', with actual type '${
        f === null ? "null" : Array.isArray(f) ? "array" : typeof f
      }':\n           ${JSON.stringify(f)}\n`
    );
  }

  return function (l) {
    if (typeof l != "number") {
      throw new TypeError(
        `Helluva.js: range: Couldn't match expected type 'number', with actual type '${
          l === null ? "null" : Array.isArray(l) ? "array" : typeof l
        }':\n           ${JSON.stringify(l)}\n`
      );
    }

    let res = [];
    if (f == l) {
      res.push(f);
    } else if (f < l) {
      for (let i = f; i < l + 1; i++) {
        res.push(i);
      }
    } else if (f > l) {
      for (let i = f; i > l - 1; i--) {
        res.push(i);
      }
    }

    return res;
  };
};

/* Object */

// prop :: String -> Object -> a
exports.prop = function (string) {
  /* Production version */
  if (process.env.NODE_ENV == "production") {
    return function (obj) {
      return obj[string];
    };
  }
  /* End of production version */

  /* Development version */
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
      throw `Helluva.js: prop: Object has not own property: ${string}`;
    }
    return obj[string];
  };
  /* End of development version */
};

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

// mapObj :: (a -> b) -> Object -> Object
exports.mapObj = function (fn) {
  if (process.env.NODE_ENV == "production") {
    return Object.fromEntries(
      Object.entries(obj).map(el => [el[0], fn(el[1])])
    );
  }
  if (typeof fn != "function") {
    throw new TypeError(
      `Helluva.js: mapObj: Couldn't match expected type 'function', with actual type '${
        fn === null ? "null" : Array.isArray(fn) ? "array" : typeof fn
      }':\n           ${JSON.stringify(fn)}\n`
    );
  }
  return function (obj) {
    if (Array.isArray(obj) || typeof obj != "object" || obj === null) {
      throw new TypeError(
        `Helluva.js: mapObj: Couldn't match expected type 'object', with actual type '${
          obj === null ? "null" : Array.isArray(obj) ? "array" : typeof obj
        }':\n           ${JSON.stringify(obj)}\n`
      );
    }

    return Object.fromEntries(
      Object.entries(obj).map(el => [el[0], fn(el[1])])
    );
  };
};
