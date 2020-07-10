const { type } = require("../Function/type");

exports.empty = xs => {
  const rt = type(xs);
  if ([ "string", "array" ].some(el => el == rt)) {
    return xs.length == 0;
  } else if (rt == "object") {
    return Object.keys(xs).length == 0;
  } else {
    throw Error(`Helluva.js: empty: expected one of ["string", "array", "object"], instead got "${rt}"`);
  }
};
