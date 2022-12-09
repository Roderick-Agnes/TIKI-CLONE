import {
  SlArrowLeft,
  SlArrowRight,
} from "react-icons/sl";

const FilterNavbar = (props) => {
  const {
    filters,
    filterItems,
    filterActive,
    setFilterActive,
    setFilters,
    pagination,
    prevPage,
    nextPage,
  } = props;
  return (
    <div className='flex flex-row justify-between px-4 py-4  w-full  bg-white border-b border-solid border-t-0 border-l-0 border-r-0 border-[#e7e7e7]'>
      <div className=' w-full flex flex-row relative'>
        {filterItems.map((filter, idx) => (
          <div
            key={`filter-${filter.filterCode}`}
            className={`flex flex-col justify-center items-center cursor-pointer mx-4 first:mr-4 first:ml-0 last:ml-4 last:mr-0 
            hover:content-[''] hover:text-co hover:font-semibold hover:text-blue ${
              filterActive.filterCode ===
              filter.filterCode
                ? "font-semibold text-blue"
                : `hover:rounded hover:border-b-4 hover:border-solid hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue`
            } `}
            onClick={() => {
              setFilterActive(filter);
              setFilters((prevFilter) => {
                return {
                  ...prevFilter,
                  _filterBy: filter.filterCode,
                  _rating: "all",
                  _page: 1,
                };
              });
            }}
          >
            <span
              className={` text-sm pb-1 whitespace-pre-line`}
            >
              {filter.title}
            </span>
            <span
              className={`w-[40px] z-10 rounded border-b-4 border-solid border-t-0 border-l-0 border-r-0 border-blue ${
                filterActive.filterCode ===
                filter.filterCode
                  ? "block"
                  : "hidden"
              }`}
            ></span>
          </div>
        ))}
      </div>
      <div className='flex flex-row justify-between items-center text-sm space-x-4'>
        <div className='space-x-2'>
          <span className='text-blue'>
            {filters?._page || 0}
          </span>
          <span>/</span>
          <span>
            {pagination?._max_page || 0}
          </span>
        </div>
        <div className='flex flex-row space-x-4 text-sm font-medium'>
          <SlArrowLeft
            className={`${
              filters._page === 1
                ? "opacity-20"
                : "cursor-pointer"
            }`}
            onClick={() => {
              filters._page !== 1 && prevPage();
            }}
          />
          <SlArrowRight
            className={`${
              filters._page ===
              pagination?._max_page
                ? "opacity-20"
                : "cursor-pointer"
            }`}
            onClick={() => {
              filters._page !==
                pagination?._max_page &&
                nextPage();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterNavbar;
