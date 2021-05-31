import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Artist from "../components/artist/Artist";
import Banner from "../components/banner/Banner";
import Clips from "../components/clips/Clips";
import Trending from "../components/trending/Trending";
import { getStickers, getTrending } from "../redux/GiphyActions";
import { RootStore } from "../redux/Store";
import spinner from "../images/loading.gif";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootStore) => state.giphy.loading);

  useEffect(() => {
    dispatch(getTrending());
    dispatch(getStickers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="container loading">
        <img src={spinner} alt="" />
      </div>
    );
  }
  return (
    <div className="container">
      <Banner />
      <Trending />
      <Artist />
      <Clips />
    </div>
  );
};

export default Home;
