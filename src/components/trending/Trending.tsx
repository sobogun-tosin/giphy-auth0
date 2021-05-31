import { Link } from "react-router-dom";
import "./Trending.scss";
import { MdChevronRight } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import Carousel from "../carousel/Carousel";
import { RootStore } from "../../redux/Store";
import { useSelector } from "react-redux";
import { TrendingState } from "../../redux/types";

const Trending = () => {
  const gifs = useSelector((state: RootStore) => state.giphy.trending);

  const trendingCollections = gifs?.map((item: TrendingState) => {
    return { image: item.images.fixed_height.url, url: item.title };
  });

  const trending = trendingCollections?.slice(0, 10);

  return (
    <div>
      <div className="trending">
        <div className="trend-title">
          <i>
            <FiTrendingUp />
          </i>
          <h3>Trending</h3>
        </div>
        <Link to="/trending" className="link">
          All the GIFs
          <i>
            <MdChevronRight />
          </i>
        </Link>
      </div>
      <div className="trend-content">
        {trending && (
          <Carousel slides={trending} imgsPerSlide={6} height={"160px"} />
        )}
      </div>
    </div>
  );
};

export default Trending;
