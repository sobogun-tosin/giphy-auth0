import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../redux/GiphyActions";
import { RootStore } from "../../redux/Store";
import { TrendingState } from "../../redux/types";
import { GoVerified } from "react-icons/go";
import "./Trending.scss";
import { FaHeart } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
import spinner from "../../images/loading.gif";

const TrendingDetails = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state: RootStore) => state.giphy.trending);
  const loading = useSelector((state: RootStore) => state.giphy.loading);

  useEffect(() => {
    dispatch(getTrending());
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
      <h4>Trending GIFs</h4>
      <div className="trending-details">
        {trending &&
          trending.map((item: TrendingState, index) => {
            const { url } = item.images.fixed_width;
            return (
              <Link
                to={`/gifs/${item.title}`}
                className="trending-detail-content"
                key={index}
              >
                <img src={url} alt="Trending Images" />
                <div className="content-user">
                  <div className="icons">
                    <i>
                      <BiLink />
                    </i>
                    <i>
                      <FaHeart />
                    </i>
                  </div>
                  {item.user ? (
                    <div className="content-user-details">
                      <img src={item.user.avatar_url} alt="user-img" />
                      <h3>{item.user.username}</h3>
                      {item.user.is_verified ? (
                        <i>
                          <GoVerified />
                        </i>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default TrendingDetails;
