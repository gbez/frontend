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
import DimSumCart from "../apis/DimSumCart";
import { toast } from "react-toastify";

// PAGE
export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const nextPage = () => {
  return {
    type: INCREMENT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: DECREMENT_PAGE,
  };
};

export const resetPage = () => {
  return {
    type: RESET_PAGE,
  };
};

// FEED
export const loadFeed = (queryOverride) => async (dispatch, getState) => {
  const response = await DimSumCart.get(
    queryOverride ? queryOverride : window.location.pathname
  )
    .then((response) => {
      dispatch({ type: LOAD_FEED, payload: response });
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.response.data.message);
    });
};

export const resetFeed = () => {
  return {
    type: RESET_FEED,
  };
};

// POST
export const loadPost = (queryOverride) => async (dispatch, getState) => {
  const response = await DimSumCart.get(
    queryOverride ? queryOverride : window.location.pathname
  )
    .then((response) => {
      dispatch({ type: LOAD_POST, payload: response });
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.response.data.message);
    });
};

export const resetPost = () => {
  return {
    type: RESET_POST,
  };
};
