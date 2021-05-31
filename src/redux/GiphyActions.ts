import axios from "axios";
import { Dispatch } from "react";
import {
  ERROR,
  GiphyAction,
  IS_LOGIN,
  LOADING,
  LOGIN,
  REGISTER,
  STICKER,
  TRENDING,
} from "./types";

const url = "https://sandbox-api.getbrass.co/auth";

export const logout = () => (dispatch: Dispatch<GiphyAction>) => {
  return dispatch({ type: IS_LOGIN, payload: false });
};

export const login =
  (username: string, password: string) =>
  async (dispatch: Dispatch<GiphyAction>) => {
    dispatch({ type: LOADING });
    try {
      const form = {
        username,
        password,
      };
      const res = await axios.post(`${url}/login`, form, {
        headers: {
          Authorization: `Bearer lk_Xhu2cIE1pSZiAHCnueRrGNMrZKA5x5T7HXknQawXK8`,
          "Content-Type": "application/json",
        },
      });
      const dataRes = res.data.data;
      console.log(dataRes);
      if (!res.status) {
        throw new Error(res.statusText);
      } else {
        dispatch({
          type: LOGIN,
          payload: dataRes,
        });
        dispatch({
          type: IS_LOGIN,
          payload: true,
        });
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

export const register =
  (username: string, email: string, password: string) =>
  async (dispatch: Dispatch<GiphyAction>) => {
    dispatch({ type: LOADING });
    try {
      const form = {
        country: "NG",
        customer: {
          name: "THOSEAN World",
        },
        user: {
          firstname: "New",
          lastname: username,
          email: email,
          password: password,
          phone: "08123320811",
        },
        auto_login: 1,
      };
      const res = await axios.post(`${url}/register`, form, {
        headers: {
          Authorization: `Bearer lk_Xhu2cIE1pSZiAHCnueRrGNMrZKA5x5T7HXknQawXK8`,
          "Content-Type": "application/json",
        },
      });
      const dataRes = res.data;
      if (!res.status) {
        throw new Error(res.statusText);
      } else {
        dispatch({
          type: REGISTER,
          payload: dataRes,
        });
        dispatch({
          type: IS_LOGIN,
          payload: true,
        });
      }

      console.log(dataRes);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

export const getTrending = () => async (dispatch: Dispatch<GiphyAction>) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get(
      "https://api.giphy.com/v1/gifs/trending?api_key=7W9OIx8zM0gYkZGixkUzIyarS9HlAaHN&limit=25&rating=g"
    );
    const dataRes = res.data.data;
    const errorMsg = res.statusText;
    if (!res) {
      throw new Error(errorMsg);
    } else {
      dispatch({
        type: TRENDING,
        payload: dataRes,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const searchGIFs =
  (item: string) => async (dispatch: Dispatch<GiphyAction>) => {
    dispatch({ type: LOADING });
    try {
      const res =
        await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=7W9OIx8zM0gYkZGixkUzIyarS9HlAaHN&q=${item}&limit=25&offset=0&rating=g&lang=en
`);
      const dataRes = res.data.data;
      if (!res.status) {
        throw new Error(res.statusText);
      } else {
        dispatch({
          type: TRENDING,
          payload: dataRes,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR,
        payload: "Invalid Search Result",
      });
    }
  };

export const searchSticker =
  (item: string) => async (dispatch: Dispatch<GiphyAction>) => {
    dispatch({ type: LOADING });
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/stickers/search?api_key=7W9OIx8zM0gYkZGixkUzIyarS9HlAaHN&q=${item}&limit=25&offset=0&rating=g&lang=en`
      );
      const dataRes = res.data.data;
      if (!res.status) {
        throw new Error(res.statusText);
      } else {
        dispatch({
          type: STICKER,
          payload: dataRes,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };

export const getStickers = () => async (dispatch: Dispatch<GiphyAction>) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get(
      "https://api.giphy.com/v1/stickers/trending?api_key=7W9OIx8zM0gYkZGixkUzIyarS9HlAaHN&limit=25&rating=g"
    );
    const dataRes = res.data.data;

    if (!res.status) {
      throw new Error(res.statusText);
    } else {
      dispatch({
        type: STICKER,
        payload: dataRes,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const paginate = (items: any[]) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(items.length / itemsPerPage);

  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage);
    return tempItems;
  });

  return newItems;
};

const setError = (errMsg: string) => (dispatch: Dispatch<GiphyAction>) => {
  const timeout = setTimeout(() => {
    dispatch({
      type: ERROR,
      payload: errMsg,
    });
  }, 5000);
  return () => clearTimeout(timeout);
};
