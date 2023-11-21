import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "sonner";

const Root = () => {
  return (
    <>
      <div className="z-40">
        <Toaster richColors />
      </div>
      <div>
        <ScrollRestoration></ScrollRestoration>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
