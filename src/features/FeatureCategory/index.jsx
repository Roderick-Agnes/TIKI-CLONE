import React, {
  useState,
  useEffect,
} from "react";
import categoryApi from "../../api/categoryApi";
import QuickLinksTab from "../../components/QuickLinksTab";
import { sliceTitleShort } from "../../utils/sliceTitleShort";
import "./index.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 3 },
  389: { items: 3.5 },
};

const renderCategories = (featuredCategories) => {
  return featuredCategories.map((item, index) => {
    return (
      <QuickLinksTab
        key={item?.id ? item.id : index}
        categoryId={item.id}
        image_url={item.thumbnail}
        title={sliceTitleShort(item.title, 25)}
      />
    );
  });
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
    <section className='flex justify-center items-center w-full laptop:max-w-[73.75rem]'>
      <div className='flex flex-col justify-center items-center w-full px-[0.5rem] tablet:px-[1rem] pt-[1rem] bg-white rounded'>
        <div className='w-full flex justify-center items-center'>
          <span className='w-full text-left text-[20px] leading-[28px] text-[#242424]'>
            Danh mục sản phẩm
          </span>
        </div>
        <div className='overflow-hidden w-full bg-white rounded pt-[1rem] pb-[0.5rem] flex flex-row gap-x-[2px] gap-y-[0.5rem] justify-center tablet:hidden'>
          {featuredCategories && (
            <AliceCarousel
              mouseTracking
              items={renderCategories(
                featuredCategories,
              )}
              responsive={responsive}
              controlsStrategy='alternate'
              disableDotsControls
              disableButtonsControls
            />
          )}
        </div>
        <div className='overflow-hidden w-full bg-white rounded pt-[1rem] pb-[0.5rem] hidden tablet:flex flex-row flex-wrap gap-x-[2px] gap-y-[0.5rem] justify-start'>
          {featuredCategories &&
            featuredCategories.map(
              (item, idx) => (
                <QuickLinksTab
                  key={item?.id ? item.id : idx}
                  categoryId={item.id}
                  image_url={item.thumbnail}
                  title={sliceTitleShort(
                    item.title,
                    25,
                  )}
                />
              ),
            )}
        </div>
      </div>
    </section>
  );
}

export default FeatureCategory;
