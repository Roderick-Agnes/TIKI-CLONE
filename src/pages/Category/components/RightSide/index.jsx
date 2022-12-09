import Products from "../../../../components/Products";
import { Pagination } from "@mui/material";
import FilterNavbar from "./components/FilterNavbar";
import { useSelector } from "react-redux";
import FilterNavbarSkeleton from "../../../../components/Skeleton/FilterNavbarSkeleton";
import PaginationSkeleton from "../../../../components/Skeleton/PaginationSkeleton";

const RightSide = (props) => {
  const {
    filters,
    filterItems,
    filterActive,
    setFilters,
    setFilterActive,
    pagination,
    prevPage,
    nextPage,
    handlePaginationChange,
    category,
  } = props;

  const loader = useSelector(
    (state) => state.loader,
  );

  return (
    <div className='flex flex-col w-full gap-1'>
      {/* filter navbar */}
      {!category && <FilterNavbarSkeleton />}
      {category && (
        <FilterNavbar
          filters={filters}
          filterItems={filterItems}
          filterActive={filterActive}
          setFilters={setFilters}
          setFilterActive={setFilterActive}
          pagination={pagination}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
      {/* products list after filter */}
      <div className='flex flex-col last:items-center w-full'>
        <Products products={category?.products} />
        {!category && <PaginationSkeleton />}
        {!loader.isLoading && (
          <Pagination
            page={filters._page}
            count={pagination?._max_page}
            color='primary'
            className='mt-5'
            showFirstButton
            showLastButton
            onChange={handlePaginationChange}
          />
        )}
      </div>
    </div>
  );
};

export default RightSide;
