function countBy(items, fieldName) {
  return items.reduce((counts, item) => {
    const key = item[fieldName] || "unknown";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function sortByDateDesc(items, fieldName) {
  return [...items].sort((left, right) => {
    return String(right[fieldName]).localeCompare(String(left[fieldName]));
  });
}

module.exports = {
  countBy,
  sortByDateDesc,
};
