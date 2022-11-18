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
    <section className="flex flex-col tablet:flex-row w-full gap-2 z-[9]  bg-blue pb-[0.5rem] h-fit laptop:pb-0 laptop:mt-[15px] laptop:max-w-[73.75rem] laptop:bg-[#f5f5fa] tablet:overflow-hidden">
      {/* slider */}
      <div className="w-full px-[0.7rem] laptop:px-0 laptop:w-[785px] ">
        <Slider {...settings}>
          {banners.map((item, index) => {
            return (
              <div
                key={index}
                className="laptop:w-[785px] w-fit"
              >
                <img
                  className="rounded-md max-w-full max-h-full object-contain"
                  src={item.image_url}
                  alt={
                    item.title
                      ? item.title
                      : item.thumbnail
                  }
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* god banner */}
      <div className="rounded-md px-[0.7rem] laptop:px-0 ">
        <img
          alt={godBanner.title}
          src={godBanner.image_url}
          className=" rounded-md w-full object-cover laptop:max-h-[260px] laptop:max-w-[387px]"
        />
      </div>
    </section>
  );
};

export default Sliders;
