import axios from "axios";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import collectionApi from "../../api/collectionApi";
import CollectionItem from "../../components/CollectionItem";
import Product from "./components/Product";

import "./index.css";

const API_COLLECTIONS_URL =
  "https://tiki.vn/api/personalish/v1/blocks/collections?block_code=infinite_scroll&page_size=36&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

const ProductSuggest = () => {
  const [collections, setCollections] = useState([]);
  const [dataCollection, setDataCollection] = useState([]);
  const [itemIsActived, setItemIsActived] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(!loading);

    let collectionId = collections[itemIsActived]._id;
    collections[itemIsActived]._page =
      collections[itemIsActived].products.length / 30 + 1;

    const params = {
      _id: collectionId,
      _limit: 30,
      _page: collections[itemIsActived]._page,
    };

    // GET MORE DATA FROM COLLECTION ID
    try {
      const res = await collectionApi.getCollectionById(params);

      // PUSH NEW DATA TO COLLECTION STATE
      await res.data.products.map(async (item, idx) => {
        await collections[itemIsActived].products.push(item);
      });

      // UPADTE TOTAL PRODUCT QUANTITY CAN RENDERING EACH COLLECTION TYPE
      collections[itemIsActived]._total = res.pagination._total;

      // IF TOTAL PRODUCT QUANTITY HAS BEEN MAXIMUM THEN HIDDEN LOAD MORE BUTTON
      if (
        collections[itemIsActived].products.length === collections[itemIsActived]._total
      )
        collections[itemIsActived]._maxQuantity = true;

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

        const res = await collectionApi.getCollections(params);

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
    <section className="suggestions">
      <div className="header__suggestions">
        <div className="suggestions__title __container__">
          <span>Gợi Ý Hôm Nay</span>
        </div>

        <div className="collections ">
          <div className="collections__list">
            {collections.map((item, index) => {
              return (
                // COLLECTION TABS
                <CollectionItem
                  key={item._id ? item._id : index}
                  image_url={item.thumbnail_icon}
                  title={item.title}
                  onClick={() => {
                    chooseCollection(index);
                    setLoading(false);
                  }}
                  isActive={index === itemIsActived ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="__container__no_padding__">
        <div className="suggestion__contents">
          {
            // THE PRODUCT LIST WILL BE RENDERED BASED COLLECTION TAB HAS BEEN CHOSE
            dataCollection.length > 0 &&
              dataCollection.map((item, idx) => {
                return <Product key={idx} info={item} />;
              })
          }
          {
            // SHOW LOAD MORE BUTTON IF QUANTITY OF COLLECTION TAB HAS BEEN CHOSE NO MAXIMUM
            !collections[itemIsActived]?._maxQuantity && (
              <div
                className={!loading ? "load__more" : "load__more is__loading"}
                onClick={handleLoadMore}
              >
                {!loading ? "Xem thêm" : "Loading..."}
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default ProductSuggest;
