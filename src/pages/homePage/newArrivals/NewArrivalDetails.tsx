import { TiShoppingCart } from "react-icons/ti";
import img1 from "../../../assets/images/new1.webp";
const product = {
  id: "12",
  name: "Perfume 1",
  price: 100,
  newPrice: 89,
  image: img1,
  isStocked: true,
  isNew: true,
  description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore blanditiis, odit fugiat nam cumque doloribus optio aspernatur quaerat libero dolor et, molestiae natus nihil quidem sed dignissimos ratione soluta!
        Placeat accusantium consectetur praesentium saepe incidunt, similique provident qui nemo consequatur facilis doloribus a id cupiditate laboriosam esse dolor, possimus sed corporis quasi. Facilis eos sapiente odit voluptas dolore deleniti!`,
};
const NewArrivalDetails = () => {
  return (
    <div className="md:flex items-center gap-3 container ">
      <div className="mb-3">
        <img
          src={product.image}
          alt="product image"
          className="max-w-[14rem] md:max-w-[18rem] xl:max-sm: h-[40%] object-cover mx-auto"
        />
      </div>

      <div>
        <h1 className="text-2xl font-medium text-gray-700">{product.name}</h1>
        <div className="space-x-3 text-2xl">
          {product.newPrice && (
            <span className="text-main font-bold">${product.newPrice}</span>
          )}
          <span
            className={`${
              product.newPrice
                ? "line-through font-normal text-gray-700 text-[18px] align-super"
                : "text-main font-bold"
            }`}
          >
            ${product.price}
          </span>

          <p className="text-sm text-gray-700 my-4">{product.description}</p>
        </div>

        <div className="flex items-center justify-center  gap-3 max-w-[15rem] w-full mx-auto md:ml-0">
          <div className="flex items-center gap-1 justify-center text-2xl bg-white border border-gray-400 w-max mx-auto px-2 my-2 text-gray-950">
            <p className="cursor-pointer">-</p>
            <input
              type="number"
              className="max-w-[8rem]  w-full text-center outline-none"
              value={6}
            />
            <p className="cursor-pointer">+</p>
          </div>
          <button className="w-full text-white border-2 border-main p-[.35rem] flex items-center justify-center bg-main hover:text-white transition-all duration-200 hover:bg-orange-600">
            Add to cart <TiShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalDetails;
