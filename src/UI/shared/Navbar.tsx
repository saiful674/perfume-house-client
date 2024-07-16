import { CgSearch } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const navItesm = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "shop",
    path: "/shop",
  },
  {
    title: "faq's",
    path: "/faq",
  },
  {
    title: "stockists",
    path: "/stock",
  },
  {
    title: "wholesals",
    path: "/wholesals",
  },
  {
    title: "contact",
    path: "/contact",
  },
];
function Navbar() {
  return (
    <>
      {/* ! topbar  */}
      <div className="bg-main py-3">
        <div className="container flex justify-between items-center">
          <p className="text-gray-50">
            Afterpay, Laybuy & Genoapay | Free Delivery New Zealand & Australia*
          </p>

          <a href="#" className="text-gray-50">
            Sign In / Register
          </a>
        </div>
      </div>
      {/* ! topbar  */}

      <div className="bg-card text-card-foreground">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">PERFUME HOUSE</div>
          <nav className="flex space-x-6">
            {navItesm.map((item) => (
              <Link
                to={item.path}
                key={item.title}
                className="text-primary hover:text-main uppercase font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4 items-center">
            <div>
              <CgSearch className="text-xl cursor-pointer hover:text-main" />
            </div>

            <div>
              <HiOutlineShoppingCart className="text-xl cursor-pointer hover:text-main" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
