import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("products.json");
      const data = await res.json();
      setProducts(data);
    };
    getData();
  }, []);
  console.log(products);
  return (
    <div className="container">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mx-auto">
          Best Selling Products
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products &&
          products.slice(0, 8).map((product) => (
            <div id={product?.id}>
              <img src={product?.image} alt={product?.title} />
              <div className="flex justify-between ">
                <h4 className="font-medium text-xl ">{product.title}</h4>
                <p className="font-medium">
                  Price: <span className="text-main ">{product?.price}</span>
                </p>
              </div>
              <Button>Buy Now</Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSelling;
