import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store";
import spinner from "../../images/loading.gif";
import artistImg from "../../images/artist.gif";
import { getStickers } from "../../redux/GiphyActions";
import { StickerState } from "../../redux/types";
import { Link } from "react-router-dom";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: RootStore) => state.giphy.sticker);
  const loading = useSelector((state: RootStore) => state.giphy.loading);

  useEffect(() => {
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
      <div className="artist-banner">
        <img src={artistImg} alt="" />
      </div>
      <h4>Artist</h4>
      <div className="artist-details">
        {artists?.map((artist: StickerState) => {
          const { url } = artist.images.fixed_width;
          return (
            <Link to={`/search/${artist.title}`} className="artist-details-img">
              <img src={url} alt="artist-img" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistDetails;
