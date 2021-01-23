export function filterFeed(feed, filter, numItems) {
  var newFeed = feed.filter(function (item) {
    return item[filter.key].includes(filter.value);
  });
  return numItems ? newFeed.slice(0, numItems) : newFeed;
}

export function searchFeed(feed, string) {
  var newFeed = feed.filter(function (item) {
    return item["content"].toLowerCase().search(string.toLowerCase()) > 0;
  });
  return newFeed;
}

export function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}
