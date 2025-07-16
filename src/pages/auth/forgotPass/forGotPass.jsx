import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {   useNavigate } from "react-router-dom";
import { Toastify } from "../../../components/toastify";
import { publicRequest } from "../../../config/axios.config";
import { FaPhone } from "react-icons/fa";
import { TextInput } from "../../../components/input";
import { networkErrorHandeller } from "../../../utils/helpers";

const ForGotPassword = () => {
  const {
    handleSubmit,
    control, 
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const id = queryParams.get("id");

  // console.log("Received :", id);

  const onSubmit = async (data) => {
    
    setLoading(true);
    const formData = new FormData();

    formData.append("phone", data.phone_number);


    try {
      const response = await publicRequest.post(
        "rider/forgot-password",
        formData
      );
    //   Toastify.Success("Registration successful!");
    //   navigate("/check-otp");
      navigate(`/check-otp?id=${response?.data?.data?.phone_number}`);
    } catch (error) {
      networkErrorHandeller(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-20 mx-auto py-10 flex justify-center">
      <div className="flex flex-col items-center text-gray-700">
        <span className="font-semibold text-xl sm:text-2xl text-center leading-4">
          Forgot Password
        </span>

        <div className="w-full bg-[#8B70D1] my-5 sm:w-[600px] p-6 sm:p-10 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-white"
          >
            {/* Phone Field */}
            <div className="mt-5">
              <TextInput
                className="rounded-lg"
                name="phone_number"
                type="tel"
                control={control}
                label={
                  <div className="flex gap-2 pb-2 pl-3.5 text-white">
                    <FaPhone className="h-5 w-5" />
                    Phone
                  </div>
                }
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Invalid phone number",
                  },
                }}
                error={errors?.contactInfo?.message}
                placeholder="Enter your phone number"
                trigger={trigger}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-primary font-bold w-full py-3 rounded-md hover:bg-gray-100 mt-4"
            >
              {loading ? "Submitting..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForGotPassword;
