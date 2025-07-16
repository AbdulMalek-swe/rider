import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { RiGalleryFill, RiMenuFold4Fill } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineInventory2 } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { SingleSelect } from "../input";


const Sidebar = ({
  toggleSidebar,
  openMobileMenu,
  setOpenMobileMenu,
  menuOpen,
  menuStyle,
}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };



  const menuData = [
    {
      title: "Dashboard",
      icon: <RxDashboard />,
      path: "/dashboard",
    },
    {
      title: "Orders",
      icon: <HiBars3 />,
      path: "/dashboard/orders",
      childrens: [
        { title: "All Orders", path: "/dashboard/orders" },
        {
          title: "Pending Orders",
          path: "/dashboard/pending-orders",
          status: "pending",
        },
        {
          title: "Processed Orders",
          path: "/dashboard/processed-orders",
          status: "processing",
        },
        {
          title: "Shipped Orders",
          path: "/dashboard/shipped-orders",
          status: "shipped",
        },
        {
          title: "Completed Orders",
          path: "/dashboard/completed-orders",
          status: "delivered",
        },
        {
          title: "Canceled Orders",
          path: "/dashboard/canceled-orders",
          status: "cancelled",
        },
      ],
    }, 
  ];

  return (
    <>  
      {menuStyle === "hover" && (
        <div className="hidden md:block w-24 hover:w-52 h-screen bg-lightCard dark:bg-darkCard dark:text-darkTitle py-4 group  transition-all duration-300 ease-in-out overflow-hidden  ">
          <div className="flex items-center space-x-2 pl-4">
            <span className="text-primary text-lg font-bold left-5 pt-2 ">
              Baajar
            </span>
          </div>

          <nav className="mt-10 ">
            {menuData.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <div key={index} className="mb-2  relative ms-4">
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-[#0d6efd] z-50"></span>
                  )}

                  <Link
                    to={item.path}
                    className={`flex items-center border border-[#F3F4F6] w-full text-left rounded-md transition-all duration-200 group ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:text-black hover:bg-blue-100"
                    }`}
                    onClick={() => toggleMenu(item.title)}
                  >
                    <span className="mr-3 flex-shrink-0 text-xl pl-6 p-2">
                      {item.icon}
                    </span>
                    <div className="hidden group-hover:block truncate w-full">
                      {item.title}
                    </div>
                  </Link>

                  {item.childrens && openMenu === item.title && (
                    <div className="ml-6 mt-1 flex flex-col space-y-2">
                      {item.childrens.map((subItem, subIndex) => {
                        const isSubActive = location.pathname === subItem.path;
                        return (
                          <Link
                            key={subIndex}
                            to={
                              subItem.status
                                ? `${subItem.path}?status=${subItem.status}`
                                : subItem.path
                            }
                            className={`flex rounded-md pl-4 transition-all duration-200 relative ${
                              isSubActive
                                ? "text-primary font-semibold hover:bg-blue-100"
                                : "hover:text-black hover:bg-blue-100"
                            }`}
                          >
                            {/* If you want icons for submenu, add here */}
                            {/* <span className="mr-2 flex-shrink-0 text-lg p-2">{subItem.icon}</span> */}
                            <div className="truncate hidden group-hover:block w-full">
                              {subItem.title}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {/* ======= Desktop Sidebar Click Style ======= */}
      {menuStyle === "click" && (
        <div
          className={` font-poppins md:block w-64 fixed top-0 left-0 h-screen z-50 bg-lightCard dark:bg-darkCard dark:text-darkTitle transition-all duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <span className="text-lg font-semibold">Baajar</span>
            <button onClick={toggleSidebar}>
              <RiMenuFold4Fill
                className={`text-xl transform ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <nav className="mt-4 px-4">
            {menuData.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={index} className="mb-2 relative">
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-primary z-50"></span>
                  )}

                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-blue-100 hover:text-black"
                    }`}
                    onClick={() => toggleMenu(item.title)}
                  >
                    <span className="mr-3 text-base">{item.icon}</span>
                    <div className="truncate w-full text-sm">{item.title}</div>
                  </Link>

                  {item.childrens && openMenu === item.title && (
                    <div className="ml-6 mt-1 flex flex-col space-y-1">
                      {item.childrens.map((subItem, subIndex) => {
                        const isSubActive = location.pathname === subItem.path;
                        return (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`text-sm rounded-md p-2 pl-4 transition-all duration-200 ${
                              isSubActive
                                ? "bg-blue-200 text-blue-900"
                                : "hover:bg-blue-100 hover:text-black"
                            }`}
                          >
                            <div className="truncate w-full">
                              {subItem.title}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {/* ======= Mobile Sidebar ======= */}
      {/* Backdrop */}
      {openMobileMenu && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-30 z-40 md:hidden"
          onClick={() => setOpenMobileMenu(false)}
        />
      )}

      <div
        className={`md:hidden fixed inset-y-0 left-0 w-64 z-50 bg-lightCard dark:bg-darkCard dark:text-darkTitle shadow-lg transform transition-transform duration-500 ${
          openMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <span className="text-lg font-semibold text-primary">Baajar</span>
          <button onClick={() => setOpenMobileMenu(false)}>
            <RiMenuFold4Fill className="text-2xl" />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-56px)]">
          {menuData.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <div key={index} className="mb-2">
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-md transition ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-blue-100 hover:text-black"
                  }`}
                  onClick={() => {
                    toggleMenu(item.title);
                    setOpenMobileMenu(false); // Close sidebar on selection
                  }}
                >
                  <span className="mr-2 text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>

                {item.childrens && openMenu === item.title && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.childrens.map((subItem, subIndex) => {
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <Link
                          key={subIndex}
                          to={
                            subItem.status
                              ? `${subItem.path}?status=${subItem.status}`
                              : subItem.path
                          }
                          className={`block px-4 py-1 rounded-md text-sm ${
                            isSubActive
                              ? "text-primary font-medium"
                              : "hover:text-black"
                          }`}
                          onClick={() => setOpenMobileMenu(false)}
                        >
                          {subItem.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
