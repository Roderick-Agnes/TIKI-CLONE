import axios from "axios";
import React, {
  useState,
  useEffect,
} from "react";
import categoryApi from "../../api/categoryApi";
import QuickLinksTab from "../../components/QuickLinksTab";
import { sliceTitleShort } from "../../utils/sliceTitleShort";
import "./index.css";
import Slider from "react-slick";

const settings = {
  className: "center",
  // infinite: true,
  slidesToShow: 3,
  speed: 500,
  rows: 1,
  swipeToSlide: true,
  slidesPerRow: 2,
  arrows: false,
  showDots: false,
};

function FeatureCategory(props) {
  const [
    featuredCategories,
    setFeaturedCategories,
  ] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //set featured categories data to state
        await categoryApi
          .getCategories()
          .then((res) => {
            setFeaturedCategories(res);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full p-[15px] bg-white rounded">
        <div className="w-full flex justify-center items-center">
          <span className="w-full text-left text-[20px] leading-[28px] text-[#242424]">
            Danh mục sản phẩm
          </span>
        </div>
        <div className="overflow-hidden w-full bg-white rounded py-[0.5rem] flex flex-row gap-x-[2px] gap-y-[0.5rem] justify-center">
          <Slider {...settings}>
            {featuredCategories.map(
              (item, index) => {
                return (
                  <QuickLinksTab
                    key={
                      item?.id ? item.id : index
                    }
                    image_url={item.thumbnail}
                    title={sliceTitleShort(
                      item.title,
                      25,
                    )}
                  />
                );
              },
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default FeatureCategory;
