import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./features/Slider";
import Promotion from "./features/Promotion";
import FeatureCategory from "./features/FeatureCategory";
import PrimaryBanner from "./features/PrimaryBanner";
import ProductSuggest from "./features/ProductSuggest";
import AuthPopup from "./features/AuthPopup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [category, setCategory] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const API_CATEGORY_URL =
    "https://api.tiki.vn/shopping/v2/widgets/home-category-tab-bar?trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

  useEffect(() => {
    (async () => {
      try {
        //set category data to state
        axios.get(API_CATEGORY_URL).then((res) => {
          setCategory(res.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div
      className="app"
      style={{ overflow: "hidden", position: `${showPopup ? "fixed" : "relative"}` }}
    >
      {showPopup ? <AuthPopup togglePopup={togglePopup} /> : <></>}
      <Header togglePopup={togglePopup} />
      <Navbar
        data={category}
        newSettings={{
          speed: 0,
          arrows: true,
          slidesToShow: 11,
          autoplay: false,
        }}
      />
      <main>
        <Slider />
        <Promotion />
        <FeatureCategory />
        <PrimaryBanner />
        <ProductSuggest />
      </main>
    </div>
  );
}

export default App;
