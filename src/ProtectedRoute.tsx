import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { RootStore } from "./redux/Store";

const ProtectedRoute = ({ ...rest }) => {
  const is_login = useSelector((state: RootStore) => state.giphy.is_login);
  return is_login ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
