import axios from "axios";
import { useEffect, useState } from "react";
import collectionApi from "../../api/collectionApi";
import CollectionItem from "../../components/CollectionItem";
import Product from "./components/Product";

import "./index.css";

const API_COLLECTIONS_URL =
  "https://tiki.vn/api/personalish/v1/blocks/collections?block_code=infinite_scroll&page_size=36&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

const ProductSuggest = () => {
  const [collections, setCollections] = useState([]);
  const [collectionKey, setCollectionKey] = useState(0);
  const [dataCollection, setDataCollection] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        //set collections data to state
        // setDataCollections();
        const params = {
          itemLimit: 30,
          collectionLimit: 8,
        };

        const res = await collectionApi.getCollections(params);
        setCollections(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
                <CollectionItem
                  key={item._id ? item._id : index}
                  image_url={item.thumbnail_icon}
                  title={item.title}
                  onClick={() => {
                    setCollectionKey(index);
                    setDataCollection(collections[collectionKey]?.products);
                    console.log("index:", index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="__container__no_padding__">
        <div className="suggestion__contents">
          {console.log("data:", dataCollection?.length)}
          {dataCollection &&
            dataCollection.map((item) => {
              return <Product key={item._id} info={item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductSuggest;
