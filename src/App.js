import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import FeatureCategory from "./features/FeatureCategory";
import PrimaryBanner from "./features/PrimaryBanner";
import AuthPopup from "./features/AuthPopup";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// modified mobile view
import Footer from "./templates/Footer";
import Navigation from "./templates/Navigation";
import Header from "./templates/Header";
import Sliders from "./templates/Sliders";
import ProductSuggest from "./templates/ProductSuggest";
import Promotion from "./templates/Promotion";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

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
  const [showPopup, setShowPopup] =
    useState(false);
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const userStore = useSelector(
    (state) => state.user,
  );

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const API_CATEGORY_URL =
    "https://api.tiki.vn/shopping/v2/widgets/home-category-tab-bar?trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

  useEffect(() => {
    (async () => {
      try {
        //set category data to state
        axios
          .get(API_CATEGORY_URL)
          .then((res) => {
            setCategory(res.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div
      className="w-full max-w-full h-screen bg-blue"
      style={{
        position: `${
          showPopup || userStore.isLoading
            ? "fixed"
            : "relative"
        }`,
      }}
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

      {showPopup ? (
        <AuthPopup togglePopup={togglePopup} />
      ) : (
        <></>
      )}
      <Header togglePopup={togglePopup} />
      <Navigation />

      {/* body */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<Detail />}
        />
      </Routes>
      <Footer />

      {/* <Header togglePopup={togglePopup} /> */}
      {/* <Navbar
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
      <Footer /> */}
    </div>
  );
}

export default App;
