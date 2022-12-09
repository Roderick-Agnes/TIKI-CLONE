import { useSelector } from "react-redux";
import BrandCheckerSkeleton from "../../../../components/Skeleton/BrandCheckerSkeleton";
import CustomerAddressSkeleton from "../../../../components/Skeleton/CustomerAddessSkeleton";
import PriceRangeInputSkeleton from "../../../../components/Skeleton/PriceRangeInputSkeleton";
import RatingCheckerSkeleton from "../../../../components/Skeleton/RatingCheckerSkeleton";
import BrandChecker from "./components/BrandChecker";
import CustomerAddress from "./components/CustomerAddress";
import PriceRangeInput from "./components/PriceRangeInput";
import RatingChecker from "./components/RatingChecker";

const LeftSide = (props) => {
  const {
    filters, // STATE
    filterByRating, // CALLBACK
    filterByPriceRange, // CALLBACK
    filterByBrands, // CALLBACK
    priceStart, // CONSTANT
    priceEnd, // CONSTANT
    brands, // STATE
  } = props;

  return (
    <div className='flex flex-col'>
      {!brands && (
        <>
          <CustomerAddressSkeleton />
          <PriceRangeInputSkeleton />
          <BrandCheckerSkeleton />
        </>
      )}
      {brands && (
        <>
          <CustomerAddress />
          {/*  filter by rating */}
          <RatingChecker
            filterByRating={filterByRating}
          />
          {/* filter by price range  */}
          <PriceRangeInput
            filters={filters}
            filterByPriceRange={
              filterByPriceRange
            }
            priceStart={priceStart}
            priceEnd={priceEnd}
          />
          {/* filter by brand name  */}
          <BrandChecker
            brands={brands}
            filterByBrands={filterByBrands}
          />
        </>
      )}
      {/* customer'address */}
    </div>
  );
};

export default LeftSide;
