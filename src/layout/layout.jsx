import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
  const {pathname}=useLocation();
  useEffect(()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth",
      });
  },[pathname])
  return (
          <>
            <Navbar />
            <main>
              <Outlet />
            </main>
            <Footer />
          </>
  )
}

export default Layout;