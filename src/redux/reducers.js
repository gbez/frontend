import { combineReducers } from "redux";
import {
  SET_PAGE,
  RESET_PAGE,
  SET_RELATIONSHIP,
  GET_RELATIONSHIP,
  RESET_RELATIONSHIP,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  LOAD_POST,
  RESET_POST,
  LOAD_FEED,
  RESET_FEED,
  RESTORE_USER,
  LOGIN,
  LOGOUT,
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

const relationshipReducer = (relationship = null, action) => {
  if(action.type === SET_RELATIONSHIP) {
    return action.payload;
  } else if(action.type === GET_RELATIONSHIP) {
    return action.payload;
  } else if (action.type === RESET_RELATIONSHIP) {
    return null;
  }
  return relationship
}

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

const authReducer = (user = null, action) => {
  if (action.type === LOGIN) {
    return action.payload;
  } else if (action.type === RESTORE_USER) {
    return action.payload;
  } else if (action.type === LOGOUT) {
    return null;
  }
  return user;
};

export default combineReducers({
  page: pageReducer,
  relationship: relationshipReducer,
  post: postReducer,
  feed: feedReducer,
  user: authReducer,
});
