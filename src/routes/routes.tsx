import App from "@/App";
import Contact from "@/pages/contactUs/Contact";
import Home from "@/pages/homePage/home/Home";
import AllNewArrivalProducts from "@/pages/homePage/newArrivals/AllNewArrivalProducts";
import NewArrivalDetails from "@/pages/homePage/newArrivals/NewArrivalDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-arrival",
        element: <AllNewArrivalProducts />,
      },
      {
        path: "/new-arrival/:productDetails",
        element: <NewArrivalDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
