import Slider from "react-slick";
import "./css/navbar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { PrevArrow, NextArrow } from "./Arrows";

const Navbar = (props) => {
  const { data, newSettings } = props;
  const default_settings = {
    dots: false,
    dotsClass: `slick-dots`,
    infinite: true,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: true,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const [settings, setSettings] = useState(
    default_settings,
  );
  useEffect(() => {
    setSettings({
      ...settings,
      dots:
        newSettings.dots ||
        typeof newSettings.dots !== "undefined"
          ? newSettings.dots
          : false,
      speed:
        newSettings.speed ||
        typeof newSettings.speed !== "undefined"
          ? newSettings.speed
          : 500,
      autoplay:
        newSettings.autoplay ||
        typeof newSettings.autoplay !==
          "undefined"
          ? newSettings.autoplay
          : false,
      slidesToShow:
        newSettings.slidesToShow ||
        typeof newSettings.slidesToShow !==
          "undefined"
          ? newSettings.slidesToShow
          : 1,
      dotsClass:
        newSettings.dotsClass ||
        typeof newSettings.dotsClass !==
          "undefined"
          ? newSettings.dotsClass
          : `slick-dots`,
      arrows:
        newSettings.arrows ||
        typeof newSettings.arrows !== "undefined"
          ? newSettings.arrows
          : false,
    });
  }, []);

  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="nav-links">
            <Slider {...settings}>
              {data.map((slide, index) => {
                return (
                  <div
                    key={index}
                    className="nav-item"
                  >
                    <a
                      href="#"
                      className="nav-title"
                    >
                      {slide.name}
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
