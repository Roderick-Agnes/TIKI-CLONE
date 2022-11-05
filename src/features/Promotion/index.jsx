import React, { useEffect, useState } from "react";
import CountdownTimer from "../../components/CountdownTimer";
import Carousel from "../../components/Carousel";
import ProductsCarousel from "../../components/ProductsCarousel";
import axios from "axios";
import "./index.css";

//config time for countdown timer
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const API_DEALS_PRODUCT_URL =
  "https://tiki.vn/api/v2/widget/deals/collection?per_page=12&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

const API_THUMBNAILS_URL =
  "https://api.tiki.vn/raiden/v2/home/widgets/rewards/asa/new?platform=desktop&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

function Promotion(props) {
  const [dealProdusts, setDealProdusts] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

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
        await axios.get(API_THUMBNAILS_URL).then((res) => {
          setThumbnails(res.data.main_content);
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <section className="promotions">
      <div className="promotions-container">
        <div className="hot-deals">
          <div className="hot-deals-header">
            <div className="header-left">
              <div className="header-title">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
                  alt="giá-sốc"
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                  alt="icon-flash"
                  width={21}
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
                  alt="flash-deal"
                />
              </div>
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
            <div className="header-right">
              <a href="#">Xem thêm</a>
            </div>
          </div>
          <div className="hot-deal-body">
            <ProductsCarousel
              data={dealProdusts}
              newSettings={{
                dots: false,
                speed: 1000,
                autoplay: true,
                slidesToShow: 5,
              }}
            />
          </div>
        </div>
        <div className="thumbnail-banners">
          <Carousel
            data={thumbnails}
            newSettings={{
              dots: false,
              speed: 1000,
              autoplay: true,
              slidesToShow: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Promotion;
