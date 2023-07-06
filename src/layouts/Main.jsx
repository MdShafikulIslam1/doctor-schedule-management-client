import Navbar from "../Pages/Sharedpage/Navbar/Navbar";
import Footer from "../Pages/Sharedpage/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
