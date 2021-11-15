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
  LOGIN,
  LOGOUT,
  RESTORE_USER,
} from "./actionTypes";
import b3 from "../apis/besner-blog-backend";
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

//RELATIONSHIP
export const setRelationship = (email, newsletters) => async (dispatch, getState) => {
  const response = await b3.patch(`/relationship/subscribe/${email}?newsletters=${newsletters}`)
    .then((response) => {
      console.log(response);
      dispatch({ type: SET_RELATIONSHIP, payload: response.data });
      window.location.href = "http://localhost:3001/unsubscribe";
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getRelationship = (query) => async (dispatch, getState) => {
  const response = await b3.get(`/relationship?${query}`)
    .then((response) => {
      dispatch({ type: GET_RELATIONSHIP, payload: response.data });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const resetRelationship = () => {
  return {
    type: RESET_RELATIONSHIP,
  };
};

// FEED
export const loadFeed = (queryOverride) => async (dispatch, getState) => {
  console.log(queryOverride);
  const response = await b3.get(
    queryOverride ? queryOverride : window.location.pathname
  )
    .then((response) => {
      dispatch({ type: LOAD_FEED, payload: response });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const resetFeed = () => {
  return {
    type: RESET_FEED,
  };
};

// POST
export const loadPost = (queryOverride) => async (dispatch, getState) => {
  const response = await b3.get(
    queryOverride ? queryOverride : `/blogpost/${window.location.pathname}`
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

// AUTH
export const restoreUser = () => async (dispatch) => {
  const response = await b3.get("/user/whoAmI")
    .then((response) => {
      dispatch({ type: RESTORE_USER, payload: response });
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

export const login = (loginObject) => async (dispatch) => {
  const response = await b3.post("/user/login", loginObject)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN, payload: response.data });
      toast.success("Log In Success");
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
