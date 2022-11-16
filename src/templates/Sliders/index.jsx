import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../utils/breakpoint";

const API_BANNERS_URL =
  "https://tiki.vn/api/shopping/v2/banners?group=home_banner_main_v2&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
const API_GOD_BANNER_URL =
  "https://tiki.vn/api/shopping/v2/callout/god_banner?trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
const settings = {
  dots: false,
  infinite: true,

  arrows: false,
  autoplay: true,
  speed: 0,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Sliders = () => {
  const [banners, setBanners] = useState([]);
  const [godBanner, setGodBanner] = useState({});

  useEffect(() => {
    (async () => {
      try {
        //set banners data to state
        await axios
          .get(API_BANNERS_URL)
          .then((res) => {
            setBanners(res.data.data);
          });
        //set god banner data to state
        await axios
          .get(API_GOD_BANNER_URL)
          .then((res) => {
            console.log(
              "banner: " + res.data.banner,
            );
            setGodBanner(res.data.banner);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col gap-2 z-[9]  bg-blue pb-[0.5rem] h-fit">
      {/* slider */}
      <div className="w-full px-[0.5rem]">
        <Slider {...settings}>
          {banners.map((item, index) => {
            return (
              <img
                key={index}
                className="rounded-md object-contain w-full h-full"
                src={item.image_url}
                alt={
                  item.title
                    ? item.title
                    : item.thumbnail
                }
              />
            );
          })}
        </Slider>
      </div>
      {/* god banner */}
      <div className="rounded-md px-[0.5rem]">
        <img
          alt={godBanner.title}
          src={godBanner.image_url}
          className=" rounded-md object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Sliders;
