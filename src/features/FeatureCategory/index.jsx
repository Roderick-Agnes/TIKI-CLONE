import axios from "axios";
import React, { useState, useEffect } from "react";
import categoryApi from "../../api/categoryApi";
import QuickLinksTab from "../../components/QuickLinksTab";
import "./index.css";

const API_FEATURED_CATEGORY_URL =
  "https://tiki.vn/api/personalish/v1/blocks/categories?block_code=featured_categories&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

function FeatureCategory(props) {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //set featured categories data to state
        await categoryApi.getCategories().then((res) => {
          setFeaturedCategories(res);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="featured__category">
      <div className="__container__">
        <div className="header__features__category">
          <span>Danh mục nổi bật</span>
        </div>
        <div className="home__quicklinks__tab__container">
          {featuredCategories.map((item, index) => {
            return (
              <QuickLinksTab
                key={item._id ? item._id : index}
                image_url={item.thumbnail}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureCategory;
