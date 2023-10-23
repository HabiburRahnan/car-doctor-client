import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Shared/NavBar/NavBar";
import Footer from "../Pages/Home/Shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
