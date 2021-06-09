import React, { useEffect, useState } from "react";
import "./SearchDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchGIFs, searchSticker } from "../../redux/GiphyActions";
import { RootStore } from "../../redux/Store";
import { StickerState, TrendingState } from "../../redux/types";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaVolumeMute } from "react-icons/fa";
import spinner from "../../images/loading.gif";

const SearchDetails = () => {
  const [value, setValue] = useState(0);
  const [tab, setTab] = useState(1);

  const { id } = useParams<any>();
  const dispatch = useDispatch();
  const items = useSelector((state: RootStore) => state.giphy.trending);
  const stickers = useSelector((state: RootStore) => state.giphy.sticker);
  const loading = useSelector((state: RootStore) => state.giphy.loading);
  const gifUrl = items?.map((item: TrendingState) => {
    return item.images.fixed_width.url;
  });
  const stickerUrl = stickers?.map((item: StickerState) => {
    return item.images.fixed_width.webp;
  });

  const ranNum = Math.floor(Math.random() * 10);

  const clips = gifUrl?.slice(ranNum, ranNum + 11);
  let firstFour = clips?.slice(value, value + 4);
  if (clips && firstFour && firstFour?.length < 4) {
    firstFour = firstFour?.concat(clips?.slice(0, 4 - firstFour.length));
  }

  const channel = items?.slice(0, 10);
  let firstFourChannels = channel?.slice(value, value + 4);
  if (channel && firstFourChannels && firstFourChannels?.length < 4) {
    firstFourChannels = firstFourChannels?.concat(
      channel?.slice(0, 4 - firstFourChannels.length)
    );
  }

  const next = () => {
    if (clips && value > clips.length - 1) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };
  const prev = () => {
    if (clips && value < 0) {
      setValue(clips?.length - 1);
    } else {
      setValue(value - 1);
    }
  };

  useEffect(() => {
    dispatch(searchGIFs(id));
    dispatch(searchSticker(id));
  }, [id, dispatch]);

  const toggle = (index: number) => {
    setTab(index);
  };

  if (loading) {
    return (
      <div className="container loading">
        <img src={spinner} alt="" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="search-header">
        <div className="title">
          <h1>{id} </h1>
        </div>
      </div>
      <div className="search-clips-container">
        <div className="clip-header">
          <div className="title">
            <h3>GIPHY Clips</h3>
          </div>
          <div className="arrows">
            <i>
              <MdChevronLeft onClick={() => prev()} />
            </i>
            <i>
              <MdChevronRight onClick={() => next()} />
            </i>
          </div>
        </div>
        <div className="clips-content">
          {firstFour?.map((item: string, index: number) => {
            return (
              <div className="content" key={index}>
                <img src={item} alt="item img" />
                <i>
                  <FaVolumeMute />
                </i>
              </div>
            );
          })}
        </div>
      </div>
      <div className="search-container">
        <div className="search-top">
          <span className={tab === 1 ? "active" : ""} onClick={() => toggle(1)}>
            GIFs
          </span>
          <span className={tab === 2 ? "active" : ""} onClick={() => toggle(2)}>
            Stickers
          </span>
        </div>
        <div className="search-body">
          {gifUrl &&
            gifUrl.map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    tab === 1 ? "search-content show" : "search-content"
                  }
                >
                  <img src={item} alt={"img"} />
                </div>
              );
            })}
          {stickerUrl &&
            stickerUrl.map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    tab === 2
                      ? "search-content show sticker-bg"
                      : "search-content sticker-bg"
                  }
                >
                  <img src={item} alt={"img"} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchDetails;
