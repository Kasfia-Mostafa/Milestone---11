import { Outlet } from "react-router-dom";
import Footer from "../SharedPages/Footer";
import Navbar from "../SharedPages/Navbar";

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