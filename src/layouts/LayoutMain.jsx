import Footer from "../components/Footer";
import NavbarMain from "../components/NavbarMain";
import { Outlet } from "react-router-dom";
const LayoutMain = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />
      <main className="flex-grow main__container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
