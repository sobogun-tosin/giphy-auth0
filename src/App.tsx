import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArtistDetails from "./components/artist/ArtistDetails";
import ClipsDetails from "./components/clips/ClipsDetails";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import TrendingDetails from "./components/trending/TrendingDetails";
import ErrorPage from "./pages/ErrorPage";
import GIFsDetails from "./pages/GIFsDetails/GIFsDetails";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import SearchDetails from "./pages/searchDetails/SearchDetails";
import UserPage from "./pages/userPage/UserPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Search />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/user" exact component={UserPage} />
          <Route path="/trending" component={TrendingDetails} exact />
          <Route path="/artist" component={ArtistDetails} />
          <Route path="/search/:id" component={SearchDetails} />
          <Route path="/clip" component={ClipsDetails} exact />
          <Route path="/gifs/:id" component={GIFsDetails} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
