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
import Category from "./pages/Category";
import Cart from "./pages/Cart";

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

  const userStore = useSelector(
    (state) => state.user,
  );
  const loader = useSelector(
    (state) => state.loader,
  );

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div
      className='w-full max-w-full h-screen bg-blue'
      style={{
        position: `${
          showPopup ||
          userStore.isLoading ||
          loader.isLoading
            ? "fixed"
            : "relative"
        }`,
      }}
    >
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {/* {userStore.isLoading ||
        (loader.isLoading && (
          <span className='spinner overlay'>
            <SyncLoader
              color='#1A94FF'
              loading={true}
              cssOverride={override}
              size={15}
              aria-label='Loading Spinner'
              data-testid='loader'
            />
          </span>
        ))} */}

      {showPopup ? (
        <AuthPopup togglePopup={togglePopup} />
      ) : (
        <></>
      )}
      <Header togglePopup={togglePopup} />
      <Navigation />

      {/* body */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/product/:id'
          element={<Detail />}
        />
        <Route
          path='/categories/:id'
          element={<Category />}
        />
        <Route
          path='/your-cart/'
          element={<Cart />}
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
