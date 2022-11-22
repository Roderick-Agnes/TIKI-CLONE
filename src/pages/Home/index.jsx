import ProductSuggest from "../../templates/ProductSuggest";
import Promotion from "../../templates/Promotion";
import FeatureCategory from "../../features/FeatureCategory";
import Sliders from "../../templates/Sliders";

const Home = () => {
  return (
    <main className="bg-[#F5F5FA] w-full flex flex-col relative z-[9] laptop:items-center laptop:justify-center">
      <Sliders />
      <Promotion />
      <FeatureCategory />
      <ProductSuggest />
    </main>
  );
};

export default Home;
