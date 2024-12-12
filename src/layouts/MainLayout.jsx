import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 pt-6 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
