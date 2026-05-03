function ok(data, meta) {
  return {
    success: true,
    data,
    meta,
  };
}

function created(data) {
  return {
    success: true,
    data,
  };
}

module.exports = {
  ok,
  created,
};
