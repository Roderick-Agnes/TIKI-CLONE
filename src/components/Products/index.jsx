import { useSelector } from "react-redux";
import Product from "../Product";
import ProductSkeleton from "../Skeleton/ProductSkeleton";

const Products = ({ products }) => {
  // GET LOADER STATE IN REDUX STORE
  const loader = useSelector(
    (state) => state.loader,
  );
  return (
    <div className='pb-[4rem] tablet:pb-0 flex flex-col justify-start w-full bg-transparent rounded laptop:max-w-full'>
      <div className='max-w-fit  bg-[#f5f5fa] flex justify-center gap-[0.5rem] flex-wrap overflow-hidden laptop:justify-start'>
        {loader.isLoading && (
          <ProductSkeleton counts={40} />
        )}
        {
          // THE PRODUCT LIST WILL BE RENDERED BASED COLLECTION TAB HAS BEEN CHOSE
          products &&
            products.map((item, idx) => {
              return (
                <Product key={idx} info={item} />
              );
            })
        }
      </div>
    </div>
  );
};

export default Products;
