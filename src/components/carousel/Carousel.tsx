import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Carousel.scss";

interface CarouselProps {
  slides: Slides[];
  imgsPerSlide: number;
  height: string;
  width?: string;
}

interface Slides {
  image: string;
  url: string;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  imgsPerSlide,
  height,
  width,
}) => {
  const [index, setIndex] = useState(0);

  const slideLen = slides.length - 1;

  const nextSlide = () => {
    if (index > slideLen) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index < 0) {
      setIndex(slideLen);
    } else {
      setIndex(index - 1);
    }
  };

  let firstSlides = slides.slice(index, index + imgsPerSlide);
  if (firstSlides.length < imgsPerSlide) {
    firstSlides = firstSlides.concat(
      slides.slice(0, imgsPerSlide - firstSlides.length)
    );
  }

  return (
    <div>
      <div className="carousel">
        {firstSlides.map((link: Slides, imgIndex: number) => {
          return (
            <Link
              to={`/gifs/${link.url}`}
              key={imgIndex}
              className={`carousel-content active`}
            >
              <img
                src={link.image}
                alt=""
                style={{ height: height, width: width }}
              />
            </Link>
          );
        })}
        <div className="carousel-btn-container">
          <MdChevronLeft
            className="carousel-btn left"
            onClick={() => prevSlide()}
          />
          <MdChevronRight
            className="carousel-btn right"
            onClick={() => nextSlide()}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
