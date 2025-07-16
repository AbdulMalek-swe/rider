import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const CheckButton = (props) => {
  const [check, setCheck] = useState("false");

  const handleClick = () => {
    setCheck(!check);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full rounded-full p-3 flex items-center space-x-2 ${
          check ? "bg-blue-500" : "bg-gray-100"
        }`}
      >
        <div
          className={`${
            check ? "border-none" : "border"
          } w-7 h-7 rounded-full flex items-center justify-center text-black z-30 ${
            check ? "bg-white" : "bg-white"
          }`}
        >
          {check ? <FaCheck className="text-blue-600" /> : ""}
        </div>
        <span>{props.name}</span>
      </button>
    </div>
  );
};

export default CheckButton;
