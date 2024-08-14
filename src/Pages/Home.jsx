import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
