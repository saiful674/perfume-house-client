import { Button } from "@/components/ui/button";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbScanEye } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/new1.webp";
import img2 from "../../../assets/images/new2.webp";
import img3 from "../../../assets/images/new3.webp";
import img4 from "../../../assets/images/new4.webp";

import Modal from "@/UI/components/modal/Modal";
import CustomTooltip from "@/UI/shared/Tooltip";
import { useState } from "react";
import NewArrivalDetails from "./NewArrivalDetails";

const products = [
  {
    id: "12",
    name: "Perfume 1",
    price: 100,
    newPrice: 57,
    image: img1,
    isStocked: true,
    isNew: true,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore blanditiis, odit fugiat nam cumque doloribus optio aspernatur quaerat libero dolor et, molestiae natus nihil quidem sed dignissimos ratione soluta!
        Placeat accusantium consectetur praesentium saepe incidunt, similique provident qui nemo consequatur facilis doloribus a id cupiditate laboriosam esse dolor, possimus sed corporis quasi. Facilis eos sapiente odit voluptas dolore deleniti!`,
  },
  {
    id: "1e2",
    name: "Perfume 2",
    price: 100,
    newPrice: null,
    image: img2,
    isStocked: true,
    isNew: true,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore blanditiis, odit fugiat nam cumque doloribus optio aspernatur quaerat libero dolor et, molestiae natus nihil quidem sed dignissimos ratione soluta!
        Placeat accusantium consectetur praesentium saepe incidunt, similique provident qui nemo consequatur facilis doloribus a id cupiditate laboriosam esse dolor, possimus sed corporis quasi. Facilis eos sapiente odit voluptas dolore deleniti!`,
  },
  {
    id: "1f2",
    name: "Perfume 3",
    price: 100,
    newPrice: 57,
    image: img3,
    isStocked: true,
    isNew: true,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore blanditiis, odit fugiat nam cumque doloribus optio aspernatur quaerat libero dolor et, molestiae natus nihil quidem sed dignissimos ratione soluta!
        Placeat accusantium consectetur praesentium saepe incidunt, similique provident qui nemo consequatur facilis doloribus a id cupiditate laboriosam esse dolor, possimus sed corporis quasi. Facilis eos sapiente odit voluptas dolore deleniti!`,
  },
  {
    id: "1rt2",
    name: "Perfume 4",
    price: 100,
    newPrice: 57,

    image: img4,
    isStocked: false,
    isNew: true,
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore blanditiis, odit fugiat nam cumque doloribus optio aspernatur quaerat libero dolor et, molestiae natus nihil quidem sed dignissimos ratione soluta!
        Placeat accusantium consectetur praesentium saepe incidunt, similique provident qui nemo consequatur facilis doloribus a id cupiditate laboriosam esse dolor, possimus sed corporis quasi. Facilis eos sapiente odit voluptas dolore deleniti!`,
  },
];

const NewArrival = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="py-9">
      <div className="container">
        <h2 className="text-2xl font-bold py-6 text-center">New Arrivals</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative  mx-auto max-w-sm w-full border-2 border-orange-100 rounded-md overflow-hidden hover:border-orange-200 transition group"
            >
              <div className=" absolute left-0 bottom-[14rem] w-full rounded-xl">
                <div className="flex items-center justify-center gap-3 w-max bg-white mx-auto py-2 px-4 rounded-full shadow-md translate-y-5 invisible group-hover:visible group-hover:translate-y-0 transition duration-300">
                  <CustomTooltip text="Add wishlist">
                    <IoMdHeartEmpty className="text-xl hover:text-main transition cursor-pointer" />
                  </CustomTooltip>

                  <CustomTooltip text="Quick View">
                    <TbScanEye
                      onClick={openModal}
                      className="text-xl hover:text-main transition cursor-pointer"
                    />
                  </CustomTooltip>
                </div>
              </div>

              {/* ------- image ------ */}

              {/* ------- stock status ------ */}
              {product.isStocked ? (
                <div className="absolute top-0 right-0 bg-green-400 text-white text-sm px-2 py-1 rounded-md">
                  Stock available
                </div>
              ) : (
                <div className="absolute top-0 right-0 bg-red-400 text-white text-sm px-2 py-1 rounded-md">
                  Out of Stock
                </div>
              )}
              {/* ------- stock status ------ */}
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-xs mx-auto max-h-[20rem] object-cover"
                />
              </div>

              <div className=" text-white font-bold">
                {/* ------- details ------ */}
                <div className="text-black text-center text-2xl font-semibold py-2">
                  <h1 className="text-gray-800">{product.name}</h1>
                  <div className="space-x-3 text-3xl">
                    <span
                      className={`  ${
                        product.newPrice
                          ? "line-through font-normal text-gray-700 text-[18px] align-super"
                          : "text-main "
                      }`}
                    >
                      ${product.price}
                    </span>
                    {product.newPrice && (
                      <span className="text-main font-bold">
                        ${product.newPrice}
                      </span>
                    )}
                  </div>
                </div>
                {/* ------- details ------ */}

                <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 p-3">
                  <button className="w-full text-main border-2 border-main p-1 rounded-md flex items-center justify-center hover:bg-main hover:text-white transition-all duration-200">
                    Add to cart <TiShoppingCart className="text-xl" />
                  </button>

                  <button className="w-full bg-main border-2 border-main p-1 rounded-md hover:bg-orange-600 transition">
                    <Link to={`/new-arrival/${product.id}`}> Buy Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-5">
          <Link to={"/new-arrival"}>
            <Button variant={"destructive"} className="mx-auto block">
              See All New Product
            </Button>
          </Link>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal}>
          {" "}
          <NewArrivalDetails></NewArrivalDetails>{" "}
        </Modal>
      </div>
    </div>
  );
};

export default NewArrival;
