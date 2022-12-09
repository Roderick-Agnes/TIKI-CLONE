import { useState, useEffect } from "react";
import {
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

import Products from "../../components/Products";
import productApi from "../../api/productApi";
import queryString from "query-string";
import { Pagination } from "@mui/material";
import { useRef } from "react";
import { useCallback } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  onLoading,
  offLoading,
} from "../../redux/custom/loader";
import BreadcrumbSkeleton from "../../components/Skeleton/BreadcrumbSkeleton";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const filterItems = [
  { title: "Bán chạy", filterCode: "HOT" },
  { title: "Hàng mới", filterCode: "NEW" },
  {
    title: "Giá thấp đến cao",
    filterCode: "ASC",
  },
  {
    title: "Giá cao đến thấp",
    filterCode: "DESC",
  },
];

const Category = () => {
  const [category, setCategory] = useState();
  const [brands, setBrands] = useState();
  const [filterActive, setFilterActive] =
    useState(filterItems[0]);
  const [pagination, setPagination] = useState();
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 40,
    _filterBy: filterActive.filterCode,
    _rating: "all",
    _priceRangeStart: 0,
    _priceRangeEnd: 0,
    _brands: [],
  });
  const priceStart = useRef(0);
  const priceEnd = useRef(0);

  const dispatch = useDispatch();
  const loader = useSelector(
    (state) => state.loader,
  );

  const { id } = useParams();

  const fetchProductsByCategoryId = async () => {
    try {
      onLoading(dispatch);
      const data =
        await productApi.getProductsByCategoryId(
          id,
          filters,
        );
      console.log(data);
      return data;
    } catch (error) {
      console.log("Failed to fetch data");
    }
  };

  const handlePaginationChange = (
    event,
    value,
  ) => {
    setFilters((filter) => {
      return { ...filter, _page: value };
    });
    console.log(filters);
  };
  const prevPage = () => {
    setFilters((filter) => {
      return {
        ...filter,
        _page: filter._page - 1,
      };
    });
  };
  const nextPage = () => {
    setFilters((filter) => {
      return {
        ...filter,
        _page: filter._page + 1,
      };
    });
  };
  const filterByRating = (rate) => {
    setFilters((filter) => {
      return {
        ...filter,
        _rating: rate,
        _page: 1,
      };
    });
  };
  const filterByPriceRange = () => {
    setFilters((filter) => {
      return {
        ...filter,
        _priceRangeStart:
          parseInt(priceStart.current.value) || 0,
        _priceRangeEnd:
          parseInt(priceEnd.current.value) || 0,
      };
    });
  };

  const filterByBrands = (e) => {
    setFilters((filter) => {
      return {
        ...filter,
        _page: 1,
        _brands: !filter._brands.includes(
          e.target.value,
        )
          ? [...filter._brands, e.target.value]
          : [...filter._brands].filter(
              (brand) => brand !== e.target.value,
            ),
      };
    });
  };

  useEffect(() => {
    (async () => {
      const data =
        await fetchProductsByCategoryId();
      offLoading(dispatch);
      if (data) {
        setCategory(data?.data.category[0]);
        setBrands(data?.data.brands);
        setPagination(data?.data.pagination);
        console.log(
          "data: ",
          data.data.category[0],
        );
      }
    })();
  }, [filters]);

  return (
    <div className='bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center'>
      <div className='w-full laptop:max-w-[75rem] laptop:bg-[#f5f5fa] pb-[4rem] tablet:pb-0'>
        {!category && <BreadcrumbSkeleton />}
        {category && (
          <Breadcrumb
            category={null}
            name={category?.title}
          />
        )}

        <div className='flex flex-row mb-4 gap-3'>
          {/* filter section - left */}
          <LeftSide
            filters={filters}
            filterByRating={filterByRating}
            filterByPriceRange={
              filterByPriceRange
            }
            filterByBrands={filterByBrands}
            priceStart={priceStart}
            priceEnd={priceEnd}
            brands={brands}
          />
          {/* products - right */}
          <RightSide
            filters={filters}
            filterItems={filterItems}
            filterActive={filterActive}
            setFilters={setFilters}
            setFilterActive={setFilterActive}
            pagination={pagination}
            prevPage={prevPage}
            nextPage={nextPage}
            category={category}
            handlePaginationChange={
              handlePaginationChange
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
