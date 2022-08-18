import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/products-carousel.css";

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
        {data.map((item) => {
              return (
                <div key={item.deal_id} className="deal-container">
                  <a href={"#"} className="deal-item">
                    <div className='image-container'>
                      <img
                        src={item.product.thumbnail_url}
                        alt={item.product.name}
                        className="deal-image"
                      />
                      {
                        item.product.badges_new.map((item, index) => {
                          return(
                            item.type === 'icon_badge' ? (
                              <img key={index} src={item.icon} alt='freeship_tikifast' className="freeship_tikifast_icon"/>
                            ) : ("")
                          )
                        })
                      }
                    </div>
                    
                    <div className="product-des">
                      <span className="special__price">
                        {item.special_price.toLocaleString("it-IT")} ₫
                      </span>
                      <span className="deals__discount">
                        -{item.discount_percent}%
                      </span>
                    </div>
                    <div className="deal__qty">
                      <div
                        className="deal__progress"
                        style={{ width: item.progress.ordered_percent }}
                      ></div>
                      {item.progress.is_hot_flag && item.progress.is_hot_flag !== 'undefined' ? (
                        <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                        className="fire_icon"
                        alt="fire_icon"
                      />
                      ) : (
                        ""
                      )}
                      {/* {item.progress.status === "progress-bar-success" ? (
                        ""
                      ) : (
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                          className="fire_icon"
                          alt="fire_icon"
                        />
                      )} */}

                      <span>{item.progress.progress_text}</span>
                    </div>
                  </a>
                </div>
              );
            })}
      </Slider>
    </>
  );
};

export default Carousel;
