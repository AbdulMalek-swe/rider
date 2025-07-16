import { Outlet } from "react-router-dom";
import Sidebar from "../components/menu-bar/sidebar";
import Header from "../components/menu-bar/header";
import { useCallback, useEffect, useState } from "react";
import { NetworkServices } from "../network";

export const DashboardLayout = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [menuStyle, setMenuStyle] = useState("hover");
  const [menuPosition, setMenuPosition] = useState("fixed");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [profail, setProfail] = useState(false);
  console.log("menuStyle", menuStyle);
  console.log("menuPosition", menuPosition);

  const toggleSidebar = () => {
    console.log("first");
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuStyle("click");
      } else {
        setMenuStyle("hover");
      }
    };

    // Initial call
    handleResize();

    // Optional: dynamically update on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchUser = useCallback(async () => {
    // setLoading(true);
    try {
      const response = await NetworkServices.Profile.index();
      if (response && response.status === 200) {
        setProfail(response?.data.data);
      }
    } catch (error) {
      console.error("Fetch User Error:", error);
      //  networkErrorHandeller(error);
    }
    // setLoading(false);
  }, []);

  // category api fetch
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    // <div className="dark:bg-boxdark-2 dark:text-bodydark">
    <div>
      <div className="flex h-screen overflow-hidden">
        {/* sidbar start  */}
        <Sidebar
          toggleSidebar={toggleSidebar}
          menuOpen={menuOpen}
          menuStyle={menuStyle}
          setMenuStyle={setMenuStyle}
          setOpenMobileMenu={setOpenMobileMenu}
          openMobileMenu={openMobileMenu}
        />
        <div className="    relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden  ">
          {" "}
          <Header
            toggleSidebar={toggleSidebar}
            menuOpen={menuOpen}
            menuStyle={menuStyle}
            setMenuStyle={setMenuStyle}
            menuPosition={menuPosition}
            setMenuPosition={setMenuPosition}
            setOpenMobileMenu={setOpenMobileMenu}
            profail={profail}
          />
          <main className=" ">
            <div
              className={`mx-auto w-full p-2  bg-light dark:bg-dark  ${
                menuPosition === "fixed" ? "mt-20" : ""
              }`}
            >
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
