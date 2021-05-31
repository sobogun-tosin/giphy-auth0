import {
  ERROR,
  GiphyAction,
  IS_LOGIN,
  LOADING,
  LOGIN,
  LoginState,
  REGISTER,
  RegisterState,
  STICKER,
  StickerState,
  TRENDING,
  TrendingState,
} from "./types";
interface InitialState {
  loading: boolean;
  error: string;
  trending?: TrendingState[];
  sticker?: StickerState[];
  register?: RegisterState;
  login?: LoginState;
  is_login: boolean;
}
const initialState: InitialState = {
  loading: false,
  error: "",
  is_login: false,
};
const GiphyReducer = (
  state: InitialState = initialState,
  action: GiphyAction
) => {
  switch (action.type) {
    case TRENDING:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case STICKER:
      return {
        ...state,
        sticker: action.payload,
        loading: false,
      };
    case REGISTER:
      return {
        ...state,
        register: action.payload,
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
        loading: false,
      };
    case IS_LOGIN:
      return {
        ...state,
        is_login: action.payload,
      };
    default:
      return state;
  }
};

export default GiphyReducer;
