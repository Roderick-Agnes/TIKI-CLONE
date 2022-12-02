import Product from "../Product";

const Products = ({ products }) => {
  return (
    <div className="pb-[4rem] tablet:pb-0 flex flex-col justify-center items-center w-full bg-transparent rounded laptop:max-w-full">
      <div className="max-w-fit  bg-[#f5f5fa] flex justify-start gap-[0.5rem] flex-wrap overflow-hidden">
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