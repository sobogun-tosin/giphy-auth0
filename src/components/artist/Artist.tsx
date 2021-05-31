import "./Artist.scss";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import Carousel from "../carousel/Carousel";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/Store";
import { StickerState } from "../../redux/types";

const Artist = () => {
  const gifs = useSelector((state: RootStore) => state.giphy.sticker);

  const artistsCollection = gifs?.map((items: StickerState) => {
    return { image: items.images.original.url, url: items.title };
  });
  const radNum = Math.floor(Math.random() * 10);
  const artists = artistsCollection?.slice(radNum, radNum + 10);

  return (
    <div>
      <div className="artist-header">
        <div className="title">
          <i>
            <AiOutlineThunderbolt />
          </i>
          <h3>Artists</h3>
        </div>
        <Link to="/artist" className="link">
          All GIPHY Artist
          <i>
            <MdChevronRight />
          </i>
        </Link>
      </div>
      <div className="artist-content">
        {artists && (
          <Carousel
            slides={artists}
            imgsPerSlide={4}
            height={"300px"}
            width={"380px"}
          />
        )}
      </div>
    </div>
  );
};

export default Artist;
