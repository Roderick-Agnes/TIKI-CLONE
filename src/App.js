import { useEffect, useState, CSSProperties } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const override = {
  position: "fixed",
  width: "100%",
  height: "100%",
  maxHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);

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
      style={{ position: `${showPopup || userStore.isLoading ? "fixed" : "relative"}` }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {userStore.isLoading && (
        <span className="spinner overlay">
          <SyncLoader
            color="#1A94FF"
            loading={true}
            cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </span>
      )}

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
