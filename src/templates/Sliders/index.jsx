import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SlidersSkeleton from "../../components/Skeleton/SlidersSkeleton";

const API_BANNERS_URL =
  "https://tiki.vn/api/shopping/v2/banners?group=home_banner_main_v2&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
const API_GOD_BANNER_URL =
  "https://tiki.vn/api/shopping/v2/callout/god_banner?trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
const responsive = {
  0: { items: 1 },
};

const slides = [
  <div
    // key={index}
    className='mobile:max-h-full mobile:max-w-full w-full laptop:w-[785px]'
  >
    <img
      className='rounded-md max-w-full h-auto  outline-none  object-cover'
      src={
        "https://salt.tikicdn.com/cache/w1080/ts/banner/f4/05/a2/cba7953ddcfb1a8bef099d855f59179f.png"
      }
      alt={"th"}
    />
  </div>,
  <div
    // key={index}
    className='mobile:max-h-full mobile:max-w-full w-full laptop:w-[785px]'
  >
    <img
      className='rounded-md max-w-full h-auto  outline-none  object-cover'
      src={
        "https://salt.tikicdn.com/cache/w1080/ts/banner/d3/84/12/522dde7a88f9b541ea31c7cdf94ced73.png"
      }
      alt={"th"}
    />
  </div>,
  <div
    // key={index}
    className='mobile:max-h-full mobile:max-w-full w-full laptop:w-[785px]'
  >
    <img
      className='rounded-md max-w-full h-auto  outline-none  object-cover'
      src={
        "https://salt.tikicdn.com/cache/w1080/ts/banner/97/f7/c1/1ffb06ad3916755e1ab9f12b4d972b79.png"
      }
      alt={"th"}
    />
  </div>,
];

const Sliders = () => {
  const [godBanner, setGodBanner] = useState({});

  useEffect(() => {
    (async () => {
      try {
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
    <section className='flex flex-col tablet:flex-row w-full gap-2 z-[9]  bg-blue pb-[0.5rem] h-fit laptop:pb-0 laptop:mt-[15px] laptop:max-w-[73.75rem] laptop:bg-[#f5f5fa] tablet:overflow-hidden'>
      {/* slider */}
      {!godBanner && <SlidersSkeleton />}
      {godBanner && (
        <div className='w-full px-[0.7rem] laptop:px-0 laptop:w-[785px]'>
          <AliceCarousel
            // mouseTracking
            items={slides}
            responsive={responsive}
            controlsStrategy='alternate'
            disableDotsControls
            disableButtonsControls
            autoPlay={true}
            infinite
            animationDuration={1500}
            autoPlayInterval={4500}
          />
        </div>
      )}

      {/* god banner */}
      {godBanner && (
        <div className='rounded-md px-[0.7rem] laptop:px-0 '>
          <img
            alt={godBanner.title}
            src={godBanner.image_url}
            className='rounded-md w-full object-cover laptop:max-h-[260px] laptop:max-w-[387px]'
          />
        </div>
      )}
    </section>
  );
};

export default Sliders;
