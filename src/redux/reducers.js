import { combineReducers } from "redux";
import {
  SET_PAGE,
  RESET_PAGE,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  LOAD_POST,
  RESET_POST,
  LOAD_FEED,
  RESET_FEED,
} from "./actionTypes";

const pageReducer = (page = 0, action) => {
  if (action.type === SET_PAGE) {
    return action.payload;
  } else if (action.type === INCREMENT_PAGE) {
    return (page += 1);
  } else if (action.type === DECREMENT_PAGE && page > 0) {
    return (page += -1);
  } else if (action.type === RESET_PAGE) {
    return 1;
  }
  return page;
};

const postReducer = (post = null, action) => {
  if (action.type === LOAD_POST) {
    return action.payload;
  } else if (action.type === RESET_POST) {
    return null;
  }
  return post;
};

const feedReducer = (feed = null, action) => {
  if (action.type === LOAD_FEED) {
    return action.payload;
  } else if (action.type === RESET_FEED) {
    return null;
  }
  return feed;
};

export default combineReducers({
  page: pageReducer,
  post: postReducer,
  feed: feedReducer,
});
