import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import "./index.css";
const API_PRIMARY_BANNERS_URL =
  "https://tiki.vn/api/shopping/v2/banners?group=home_v4_primary_banner&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

const PrimaryBanner = () => {
  const [primaryBannersV4, setPrimaryBannersV4] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //set primary banner v4 data to state
        axios.get(API_PRIMARY_BANNERS_URL).then((res) => {
          setPrimaryBannersV4(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="primary__banners">
      <div className="primary__banners__container">
        {primaryBannersV4.map((item, index) => {
          return (
            <Banner
              key={item.id ? item.id : index}
              url={item.url}
              title={item.title}
              image_url={item.image_url}
              classNames={"primary__banner__item"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PrimaryBanner;
