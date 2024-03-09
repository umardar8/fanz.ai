import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import Tcards from "../cards/trend-card";
import { HeroImage } from "../../assets";
import { Styles } from "../../styles";
import BaseColors from "../../constant";

export default function PrimaryCarousel(props) {
  const { title, autoplay, autoplaySpeed, cardData } = props;
  const [sliderRef, setSliderRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: autoplay,
    speed: 2000,
    autoplaySpeed: autoplaySpeed,
    // beforeChange: (current, next) => setCurrentIndex(next),
  };

  const nextSlide = () => {
    if (sliderRef) {
      const nextIndex =
        currentIndex + 1 >= cardData.length ? 0 : currentIndex + 1;
      sliderRef.slickGoTo(nextIndex);
    }
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [currentIndex]);

  return (
    <>
      <div
        className="row justify-content-center m-0 p-0  position-relative"
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        <div className="col-11 ">
          <div
            className="text-2 text-white py-3 text-uppercase"
            style={{ lineHeight: "5rem" }}
          >
            {title ? title : "--"}
          </div>
          <Slider ref={setSliderRef} {...sliderSettings}>
            {cardData.map((data) => {
              return <Tcards key={data.id} {...data} />;
            })}
          </Slider>
        </div>
        <div
          className="d-flex justify-content-between align-items-center position-absolute  p-0"
          style={{ minHeight: "65vh", width: "90%" }}
        >
          <button onClick={() => sliderRef?.slickPrev()}>
            <GrPrevious
              size={35}
              style={{
                opacity: isSliderHovered ? "0.8" : "0",
                color: BaseColors.white,
                transition: "opacity 0.3s ease",
              }}
            />
          </button>
          <button onClick={() => sliderRef?.slickNext()}>
            <GrNext
              size={35}
              style={{
                opacity: isSliderHovered ? "0.8" : "0",
                color: BaseColors.white,
                transition: "opacity 0.3s ease",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
