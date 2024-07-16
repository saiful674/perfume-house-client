import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";

const categoryItems = [
  {
    id: "11",
    name: "Category 1",
    image: img1,
  },
  {
    id: "121",
    name: "Category 1",
    image: img2,
  },
  {
    id: "111",
    name: "Category 1",
    image: img3,
  },
  {
    id: "112",
    name: "Category 1",
    image: img4,
  },
];

const Category = () => {
  return (
    <div className="container grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-8 ">
      {categoryItems.map((item) => (
        <div
          key={item.id}
          className="max-w-sm w-full object-cover mx-auto sm:max-w-screen-md border-2 border-orange-100 rounded-md overflow-hidden hover:border-main transition cursor-pointer"
        >
          <img src={item.image} alt={item.name} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default Category;
