import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div>
         <Nav />
         <div className="min-h-[calc(100vh-305px)] container mx-auto px-4">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Root;