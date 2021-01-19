export function filterFeed(feed, filter, numItems) {
  var newFeed = feed.filter(function (item) {
    return item[filter.key].includes(filter.value);
  });
  return numItems ? newFeed.slice(0, numItems) : newFeed;
}

export function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}
