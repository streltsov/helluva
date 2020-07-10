exports.type = v => {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
};
