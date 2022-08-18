import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

//get data from fake api
import QuickLinksTab from "./components/QuickLinksTab";
import ProductsCarousel from "./components/ProductsCarousel";

function App() {
  const [banners, setBanners] = useState([]);
  const [category, setCategory] = useState([]);
  const [dealProdusts, setDealProdusts] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [godBanner, setGodBanner] = useState({});
  const [sideBrands, setSideBrands] = useState([]);
  const [centerBand, setCenterBand] = useState([]);
  const [quickLinks, setQuickLinks] = useState([]);
  const [primaryBannersV4, setPrimaryBannersV4] = useState([]);
  //config time for countdown timer
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const API_CATEGORY_URL =
    "https://api.tiki.vn/shopping/v2/widgets/home-category-tab-bar?trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  const API_DEALS_PRODUCT_URL =
    "https://tiki.vn/api/v2/widget/deals/collection?per_page=12&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  const API_BANNERS_URL =
    "https://tiki.vn/api/shopping/v2/banners?group=home_banner_main_v2&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  const API_GOD_BANNER_URL =
    "https://tiki.vn/api/shopping/v2/callout/god_banner?trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  const API_THUMBNAILS_URL =
    "https://api.tiki.vn/raiden/v2/home/widgets/rewards/asa/new?platform=desktop&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  const API_HOME_BRAND_URL =
    "https://tiki.vn/api/shopping/v2/widgets/banner/home-brand?platform=desktop&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  const API_QUICKLINKS_URL =
    "https://tiki.vn/api/shopping/v2/widgets/quick_link?platform=desktop&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  const API_PRIMARY_BANNERS_URL =
    "https://tiki.vn/api/shopping/v2/banners?group=home_v4_primary_banner&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
  useEffect(() => {
    try {
      //set banners data to state
      axios.get(API_BANNERS_URL).then((res) => {
        setBanners(res.data.data);
      });
      //set category data to state
      axios.get(API_CATEGORY_URL).then((res) => {
        setCategory(res.data.data);
      });
      //set deal products data to state
      axios
        .get(API_DEALS_PRODUCT_URL)
        .then((res) => {
          setDealProdusts(res.data.data);
        })
        .catch((error) => console.log(error));
      //set thumbnails data to state
      axios.get(API_THUMBNAILS_URL).then((res) => {
        // setThumbnails(Thumbnails.main_content);
        setThumbnails(res.data.main_content);
      });
      //set god banner data to state
      axios.get(API_GOD_BANNER_URL).then((res) => {
        console.log("banner: " + res.data.banner);
        setGodBanner(res.data.banner);
      });
      //set home_brands data to state
      axios.get(API_HOME_BRAND_URL).then((res) => {
        setSideBrands(res.data.data.side_brand);
        setCenterBand(res.data.data.center_brand);
      });
      //set quick links tab data to state
      axios.get(API_QUICKLINKS_URL).then((res) => {
        setQuickLinks(res.data.data);
      });
      //set primary banner v4 data to state
      axios.get(API_PRIMARY_BANNERS_URL).then((res) => {
        setPrimaryBannersV4(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="app">
      <Header />
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
        <section className="banners">
          <div className="banners-container">
            <div className="carousel-banners">
              <Carousel data={banners} newSettings={{}} />
            </div>
            <div className="banner-product">
              <Banner
                url={godBanner.url}
                title={godBanner.title}
                image_url={godBanner.image_url}
              />
            </div>
          </div>
        </section>
        <section className="promotions">
          <div className="promotions-container">
            <div className="hot-deals">
              <div className="hot-deals-header">
                <div className="header-left">
                  <div className="header-title">
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
                      alt="giá-sốc"
                    />
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                      alt="icon-flash"
                      width={21}
                    />
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
                      alt="flash-deal"
                    />
                  </div>
                  <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>
                <div className="header-right">
                  <a href="#">Xem thêm</a>
                </div>
              </div>
              <div className="hot-deal-body">
                <ProductsCarousel
                  data={dealProdusts}
                  newSettings={{
                    dots: false,
                    speed: 1000,
                    autoplay: true,
                    slidesToShow: 5,
                  }}
                />
              </div>
            </div>
            <div className="thumbnail-banners">
              <Carousel
                data={thumbnails}
                newSettings={{
                  dots: false,
                  speed: 1000,
                  autoplay: true,
                  slidesToShow: 1,
                }}
              />
            </div>
          </div>
        </section>
        <section className="home__brands">
          <div className="home__brands__container">
            {sideBrands.map((item, index) => {
              return (
                <Banner
                  key={item.id ? item.id : index}
                  url={item.url}
                  title={item.title}
                  image_url={item.image_url}
                  classNames={"side__brands"}
                />
              );
            })}
            {centerBand.map((item, index) => {
              return (
                <Banner
                  key={item.id}
                  url={item.url}
                  title={item.title}
                  image_url={item.image_url}
                  classNames={"center__brand"}
                />
              );
            })}
          </div>
        </section>
        <section className="home__quicklinks__tab">
          <div className="home__quicklinks__tab__container">
            {quickLinks.map((item, index) => {
              return (
                <QuickLinksTab
                  key={item.id ? item.id : index}
                  image_url={item.image_url}
                  title={item.title}
                  url={item.url}
                />
              );
            })}
          </div>
        </section>
        <section className="primary__banners">
          <div className="primary__banners__container">
            {primaryBannersV4.map((item, index) => {
              return (
                <Banner
                  key={item.id ? item.id : index}
                  url={item.url}
                  title={item.title}
                  image_url={item.image_url}
                  classNames={"primary__banner__item"}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
