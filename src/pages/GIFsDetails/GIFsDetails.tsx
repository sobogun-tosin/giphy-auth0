import React, { useEffect } from "react";
import "./GIFs.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchGIFs } from "../../redux/GiphyActions";
import { RootStore } from "../../redux/Store";
import { TrendingState } from "../../redux/types";
import { GoVerified } from "react-icons/go";
import { BiLink } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { RiFullscreenFill } from "react-icons/ri";
import { BsGrid3X3GapFill, BsEyeFill } from "react-icons/bs";
import { ImEmbed, ImShare } from "react-icons/im";
import spinner from "../../images/loading.gif";

const GIFsDetails = () => {
  const { id } = useParams<any>();
  const dispatch = useDispatch();
  const gifs = useSelector((state: RootStore) => state.giphy.trending);
  const loading = useSelector((state: RootStore) => state.giphy.loading);

  console.log(gifs);
  useEffect(() => {
    dispatch(searchGIFs(id));
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="container loading">
        <img src={spinner} alt="" />
      </div>
    );
  }

  return (
    <div className="container">
      {gifs && (
        <div className="gifs-details">
          <div className="gifs-side">
            {gifs[0].user ? (
              <div className="gifs-side-content">
                <img
                  src={gifs[0].user.avatar_url}
                  width="50px"
                  height="50px"
                  alt=""
                />
                <div className="user-content">
                  <h4>{gifs[0].user.display_name}</h4>
                  <span>
                    @{gifs[0].user.username}{" "}
                    {gifs[0].user.is_verified ? (
                      <i>
                        <GoVerified />
                      </i>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="gifs-center">
            <h4 className="top-font">{id}</h4>
            <div className="gif-center-top">
              <div className="gifs-center-img">
                <img
                  src={gifs[0].images.original.url}
                  width="550px"
                  height="441px"
                  alt=""
                />
                <div className="icons">
                  <i>
                    <BsGrid3X3GapFill />
                  </i>
                  <i>
                    <RiFullscreenFill />
                  </i>
                </div>
              </div>
              <div className="gif-center-links">
                <h4>
                  <i>
                    <FaHeart />
                  </i>{" "}
                  Favorite
                </h4>
                <h4>
                  <i>
                    <BiLink />
                  </i>{" "}
                  Copy link
                </h4>
                <h4>
                  <i>
                    <ImShare />
                  </i>{" "}
                  Media
                </h4>
                <h4>
                  <i>
                    <ImEmbed />
                  </i>{" "}
                  Embed
                </h4>
                <h5 className="share-it">Share It!</h5>
                <div className="links">links</div>
                <h5 className="share-it">
                  <BsEyeFill fontSize="18px" /> 22,454,678 Views
                </h5>
              </div>
            </div>
            <h3>Related GIFs</h3>
            <div className="gifs-center-body">
              {gifs.slice(1).map((item: TrendingState, index) => {
                const { url } = item.images.fixed_width;
                return (
                  <div key={index} className="gifs-center-content">
                    <img src={url} alt="" className="gifs-img" />
                    <div className="gifs-center-data">
                      <div className="gifs-center-icons">
                        <i>
                          <BiLink />
                        </i>
                        <i>
                          <FaHeart />
                        </i>
                      </div>
                      {item.user && (
                        <div className="gifs-center-user">
                          <img
                            src={item.user.avatar_url}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                          <h4>{item.user.username}</h4>
                          {item.user.is_verified ? (
                            <i>
                              <GoVerified />
                            </i>
                          ) : (
                            ""
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GIFsDetails;
