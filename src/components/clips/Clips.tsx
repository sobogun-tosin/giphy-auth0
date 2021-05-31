import React from "react";
import { AiFillPlaySquare } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStore } from "../../redux/Store";
import { TrendingState } from "../../redux/types";
import "./Clips.scss";

const Clips = () => {
  const gifs = useSelector((state: RootStore) => state.giphy.trending);
  const clips = gifs?.slice(1, 3);
  const radNum = Math.floor(Math.random() * 10);
  const singleClip = gifs?.slice(radNum, radNum + 1);

  return (
    <div className="clips">
      <div className="clips-header">
        <div className="title">
          <h3>Clips</h3>
        </div>
        <Link to="/clip" className="link">
          All Clips
          <i>
            <MdChevronRight />
          </i>
        </Link>
      </div>
      <div className="clips-body">
        <div className="clips-main-img">
          {singleClip &&
            singleClip.map((img: TrendingState, index: number) => {
              return (
                <div key={index}>
                  <div className="main-img-container">
                    <img src={img.images.original.url} alt="" />
                    <i>
                      <AiFillPlaySquare />
                    </i>
                  </div>
                  <h3>{img.title}</h3>
                  {img.user ? (
                    <div className="content">
                      <img src={img.user.avatar_url} alt="" />
                      <h3>{img.user.username}</h3>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
        </div>
        <div className="clips-imgs">
          {clips &&
            clips.map((clip: TrendingState, index: number) => {
              const { images, user, title } = clip;
              const { original } = images;
              return (
                <div key={index} className="clips-container">
                  <div className="img-container">
                    <i>
                      <AiFillPlaySquare />
                    </i>
                    <img src={original.url} alt="" />
                  </div>
                  <h3>{title}</h3>
                  {user ? (
                    <div className="user">
                      <img src={user.avatar_url} alt="" />
                      <h3>{user.username}</h3>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Clips;
