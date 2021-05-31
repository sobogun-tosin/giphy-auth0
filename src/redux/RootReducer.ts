import { combineReducers } from "redux";
import GiphyReducer from "./GiphyReducer";

export const RootReducer = combineReducers({ giphy: GiphyReducer });
