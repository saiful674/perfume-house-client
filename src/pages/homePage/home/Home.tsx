import Banner from "@/UI/components/banner/Banner";
import BestSelling from "../bestSelling/BestSelling";
import Category from "../category/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BestSelling />
    </div>
  );
};

export default Home;
