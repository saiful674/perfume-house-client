import Navbar from "@/UI/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen h-full">
      <Navbar></Navbar>
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
