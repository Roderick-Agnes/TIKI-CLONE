import axios from "axios";
import { useEffect, useState } from "react";
import CollectionItem from "../../components/CollectionItem";
import "./index.css";

const API_COLLECTIONS_URL =
  "https://tiki.vn/api/personalish/v1/blocks/collections?block_code=infinite_scroll&page_size=36&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

const ProductSuggest = () => {
  const [collections, setCollections] = useState([]);
  const [collectionKey, setCollectionKey] = useState(0);
  const [dataCollection, setDataCollection] = useState(
    collections[collectionKey]?.items // async collection
  );
  useEffect(() => {
    (async () => {
      try {
        //set collections data to state
        // setDataCollections();
        await axios.get(API_COLLECTIONS_URL).then((res) => {
          setCollections(res.data.tabs);
          // setDataCollection(collections[0]?.items);
        });
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
                  key={item.id ? item.id : index}
                  image_url={item.icon}
                  title={item.title}
                  url={item.more_link}
                  onClick={() => {
                    setCollectionKey(index);
                    setDataCollection(collections[collectionKey]?.items);
                    console.log("index:", index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="suggestion__contents __container__">
        {console.log("data:", dataCollection?.length)}
      </div>
    </section>
  );
};

export default ProductSuggest;
