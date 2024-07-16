import Banner from "@/UI/components/banner/Banner";
import BestSelling from "../bestSelling/BestSelling";
import Category from "../category/Category";
import NewArrival from "../newArrivals/NewArrival";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BestSelling />
      <NewArrival />
    </div>
  );
};

export default Home;
