import React  from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeColor = ({toggleTheme,theme}) => {
 
  return (
    <div>
      <button
        onClick={()=>{toggleTheme(theme=='dark'?'light':'dark')}}
        className="mt-1"
      >
        {theme === "light" ? <FaRegMoon className="text-4xl bg-gray-200 p-2 rounded-full cursor-pointer" /> :<MdOutlineWbSunny className="text-4xl bg-gray-200 p-2 rounded-full cursor-pointer" />}
      </button>
    </div>
  );
};

export default ThemeColor;
