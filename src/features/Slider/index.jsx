import Carousel from "../../components/Carousel";
import React, {
  useEffect,
  useState,
} from "react";
import Banner from "../../components/Banner";
import axios from "axios";
import "./index.css";

const API_BANNERS_URL =
  "https://tiki.vn/api/shopping/v2/banners?group=home_banner_main_v2&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
const API_GOD_BANNER_URL =
  "https://tiki.vn/api/shopping/v2/callout/god_banner?trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

function Slider(props) {
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
    <section className="banners">
      <div className="banners-container">
        <div className="carousel-banners">
          <Carousel
            data={banners}
            newSettings={{}}
          />
        </div>
        <div className="banner-product">
          <Banner
            url={godBanner.url}
            title={godBanner.title}
            image_url={godBanner.image_url}
          />
        </div>
      </div>
    </section>
  );
}

export default Slider;
