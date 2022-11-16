import { useEffect, useState } from "react";
import collectionApi from "../../api/collectionApi";
import CollectionItem from "../../components/CollectionItem";
import Product from "./components/Product";

import "./index.css";

const ProductSuggest = () => {
  const [collections, setCollections] = useState(
    [],
  );
  const [dataCollection, setDataCollection] =
    useState([]);
  const [itemIsActived, setItemIsActived] =
    useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(!loading);

    let collectionId =
      collections[itemIsActived]._id;
    collections[itemIsActived]._page =
      collections[itemIsActived].products.length /
        30 +
      1;

    const params = {
      _id: collectionId,
      _limit: 30,
      _page: collections[itemIsActived]._page,
    };

    // GET MORE DATA FROM COLLECTION ID
    try {
      const res =
        await collectionApi.getCollectionById(
          params,
        );

      // PUSH NEW DATA TO COLLECTION STATE
      await res.data.products.map(
        async (item, idx) => {
          await collections[
            itemIsActived
          ].products.push(item);
        },
      );

      // UPADTE TOTAL PRODUCT QUANTITY CAN RENDERING EACH COLLECTION TYPE
      collections[itemIsActived]._total =
        res.pagination._total;

      // IF TOTAL PRODUCT QUANTITY HAS BEEN MAXIMUM THEN HIDDEN LOAD MORE BUTTON
      if (
        collections[itemIsActived].products
          .length ===
        collections[itemIsActived]._total
      )
        collections[
          itemIsActived
        ]._maxQuantity = true;

      // RESET STATE OF LOADING BUTTON
      setLoading(false);
    } catch (error) {}
  };

  // GET COLLECTION FIRST TIME
  useEffect(() => {
    (async () => {
      try {
        const params = {
          _collectionLimit: 8,
          _limit: 30,
          _page: 1,
        };

        const res =
          await collectionApi.getCollections(
            params,
          );

        //set collections data to state
        setCollections(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // SET DEFAULT COLLECTION DATA IN FIRST TIME RENDERING
  // IF COLLECTTIONS CHANGED THEN COLLECTION DATA  SHOULD BE UPDATEED AND COMPONENT WILL BE RENDERING
  useEffect(() => {
    if (collections.length > 0) {
      setDataCollection(collections[0].products);
    }
  }, [collections]);

  // SET DATA WITH POSITION OF COLLECTTION TAB
  const chooseCollection = async (idx) => {
    setDataCollection(collections[idx].products);
    setItemIsActived(idx);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="sticky top-0 bg-[#f5f5fa]  w-full">
        <div className="flex flex-col justify-center items-center w-full m-0 p-[0.5rem] bg-white rounded">
          <span className="w-full text-left text-[20px] leading-7 text-[#242424]">
            Gợi Ý Hôm Nay
          </span>
        </div>

        <div className="w-full ">
          <div
            className={`grid justify-center items-center w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[0.5rem] py-[0.5rem]`}
          >
            {collections.map((item, index) => {
              return (
                // COLLECTION TABS
                <CollectionItem
                  key={
                    item._id ? item._id : index
                  }
                  image_url={item.thumbnail_icon}
                  title={item.title}
                  parentLen={collections.length}
                  onClick={() => {
                    chooseCollection(index);
                    setLoading(false);
                  }}
                  isActive={
                    index === itemIsActived
                      ? true
                      : false
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className=" pb-[4.4rem] tablet:pb-0 flex flex-col justify-center items-center w-full bg-transparent rounded">
        <div className="max-w-fit bg-[#f5f5fa] flex justify-center flex-wrap gap-[0.5rem] overflow-hidden">
          {
            // THE PRODUCT LIST WILL BE RENDERED BASED COLLECTION TAB HAS BEEN CHOSE
            dataCollection.length > 0 &&
              dataCollection.map((item, idx) => {
                return (
                  <Product
                    key={idx}
                    info={item}
                  />
                );
              })
          }
        </div>
        {
          // SHOW LOAD MORE BUTTON IF QUANTITY OF COLLECTION TAB HAS BEEN CHOSE NO MAXIMUM
          !collections[itemIsActived]
            ?._maxQuantity && (
            <div
              className={
                !loading
                  ? "   my-[1rem] text-[#1a94ff] border-solid border-[0.2px] border-[#1a94ff] bg-transparent rounded-[3px] py-[0.5rem] px-[1rem] min-w-10rem min-h-[2rem] w-[12rem] text-[14px] font-medium cursor-pointer shadow-button flex justify-center items-center hover:bg-[#1A94FF] hover:text-white"
                  : "   my-[1rem]  border-solid border-[0.2px] border-[#1a94ff]  rounded-[3px] py-[0.5rem] px-[1rem] min-w-10rem min-h-[2rem] w-[12rem] text-[14px] font-medium cursor-pointer shadow-button flex justify-center items-center hover:bg-[#1A94FF] hover:text-white text-white bg-[#1A94FF]"
              }
              onClick={handleLoadMore}
            >
              {!loading
                ? "Xem thêm"
                : "Loading..."}
            </div>
          )
        }
      </div>
    </section>
  );
};

export default ProductSuggest;
