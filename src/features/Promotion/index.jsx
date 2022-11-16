import React, {
  useEffect,
  useState,
} from "react";
import CountdownTimer from "../../components/CountdownTimer";
import Carousel from "../../components/Carousel";
import ProductsCarousel from "../../components/ProductsCarousel";
import axios from "axios";
import "./index.css";

//config time for countdown timer
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays =
  NOW_IN_MS + THREE_DAYS_IN_MS;

const API_DEALS_PRODUCT_URL =
  "https://tiki.vn/api/v2/widget/deals/collection?per_page=12&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

const API_THUMBNAILS_URL =
  "https://api.tiki.vn/raiden/v2/home/widgets/rewards/asa/new?platform=desktop&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

function Promotion(props) {
  const [dealProdusts, setDealProdusts] =
    useState([]);
  const [thumbnails, setThumbnails] = useState(
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        //set deal products data to state
        await axios
          .get(API_DEALS_PRODUCT_URL)
          .then((res) => {
            setDealProdusts(res.data.data);
          })
          .catch((error) => console.log(error));

        //set thumbnails data to state
        await axios
          .get(API_THUMBNAILS_URL)
          .then((res) => {
            setThumbnails(res.data.main_content);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <section className="inline-block z-[9] w-full">
      <div className="flex justify-between items-center w-full h-[17rem]">
        <div className="w-full h-full bg-white rounded">
          <div className="flex justify-between items-center w-full pt-[1rem] pb-[0.5rem] px-[0.5rem]">
            <div className="flex justify-start items-center w-full">
              <div className="flex flex-row gap-[0.5rem]">
                <div className="flex flex-row justify-center items-center">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
                    alt="giá-sốc"
                  />
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                    alt="icon-flash"
                    width={21}
                    className="hidden sm:block"
                  />
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
                    alt="flash-deal"
                    className="hidden sm:block"
                  />
                </div>
                <CountdownTimer
                  targetDate={
                    dateTimeAfterThreeDays
                  }
                />
              </div>
            </div>
            <div className="flex justify-end flex-shrink-[3.5] items-center w-full">
              <span className="text-[1rem] text-[#0B74E5] font-thin cursor-pointer">
                Xem thêm
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full px-[0.5rem]">
            <ProductsCarousel
              data={dealProdusts}
              newSettings={{
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: false,
                focusOnSelect: true,
                speed: 2500,
                slidesToShow: 3,
                slidesToScroll: 2,
                swipeToSlide: true,
                // centerMode: true,
              }}
            />
          </div>
        </div>
        {/* <div className="thumbnail-banners">
      <Carousel
        data={thumbnails}
        newSettings={{
          dots: false,
          speed: 1000,
          autoplay: true,
          slidesToShow: 1,
        }}
      />
    </div> */}
      </div>
    </section>
  );
}

export default Promotion;
