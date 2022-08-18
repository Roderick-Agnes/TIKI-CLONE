import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/carousel.css";

const Carousel = (props) => {
  const { data, newSettings } = props;
  const default_settings = {
    dots: true,
    dotsClass: `slick-dots`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  const [settings, setSettings] = useState(default_settings);
  useEffect(() => {
    setSettings({
      ...settings,
      dots:
        typeof newSettings.dots !== "undefined" || newSettings.dots
          ? newSettings.dots
          : true,
      speed:
        typeof newSettings.speed !== "undefined" || newSettings.speed
          ? newSettings.speed
          : 500,
      autoplay:
        typeof newSettings.autoplay !== "undefined" || newSettings.autoplay
          ? newSettings.autoplay
          : true,
      slidesToShow:
        typeof newSettings.slidesToShow !== "undefined" ||
        newSettings.slidesToShow
          ? newSettings.slidesToShow
          : 1,
      dotsClass:
        typeof newSettings.dotsClass !== "undefined" || newSettings.dotsClass
          ? newSettings.dotsClass
          : `slick-dots`,
      infinite:
        typeof newSettings.infinite !== "undefined" || newSettings.infinite
          ? newSettings.infinite
          : true,
      slidesToScroll:
        typeof newSettings.slidesToScroll !== "undefined" ||
        newSettings.slidesToScroll
          ? newSettings.slidesToScroll
          : 1,
      arrows:
        typeof newSettings.arrows !== "undefined" || newSettings.arrows
          ? newSettings.arrows
          : false,
    });
  }, []);
  return (
    <>
    <Slider {...settings}>
      {data.map((item, index) => {
        return item.type === "banner" || item.type === "video" ? (
          <div key={item.id ? item.id : index} className="carousel-item">
            <a href={item.url_path}>
              <img
                src={item.thumbnail}
                alt={item.title ? item.title : item.thumbnail}
              />
            </a>
          </div>
        ) : (
          <div key={item.id ? item.id : index} className="carousel-item">
            <a href={item.url}>
              <img
                src={item.image_url}
                alt={item.title ? item.title : item.image_url}
              />
            </a>
          </div>
        );
      })}
    </Slider>
    </>
  );
};

export default Carousel;
