import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PassworInput, TextInput } from "../../components/input";
import { LuLockKeyhole } from "react-icons/lu";
import { publicRequest } from "../../config/axios.config";
import { networkErrorHandeller, setToken } from "../../utils/helpers";
import { Toastify } from "../../components/toastify";
import Spinner from "../../utils/loading/spinner";
import { FaPhone } from "react-icons/fa";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get("redirect");

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    trigger,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    // navigate('/dashboard')
    // console.log("Form Data:", data);
    setLoading(true);
    const newData = {
      phone_number: data.phone_number,
      password: data.password,
    };

    try {
      const response = await publicRequest.post("rider/login", newData);
    console.log(response);
      if (response?.data?.data?.rider?.role == "rider") {
        setToken(response?.data?.data?.token);
        Toastify.Success("Login successfully done");
        navigate(redirect ? redirect : "/dashboard");
      }
    } catch (error) {
      networkErrorHandeller(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container   mx-auto py-4 flex justify-center">
      <div className="flex flex-col items-center text-gray-700">
        <span className="font-semibold text-xl sm:text-2xl text-center leading-4">
          Welcome Rider. Login Here
        </span>

        <div className="w-full bg-[#8B70D1] my-5 sm:w-[550px] p-6 sm:p-10 rounded-xl flex flex-col items-center justify-center">
          <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-white overflow-hidden">
            <img
              src="/image/login-profile.svg"
              height={60}
              width={60}
              alt="Logo"
              className="w-full h-full bg-[#8B70D1] object-contain"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-center space-y-3"
          >
            {/* Phone Field */}
            <div className=" ">
              <TextInput
                className="rounded-lg"
                name="phone_number"
                type="tel"
                control={control}
                label={
                  <div className="flex gap-2 pb-2 pl-3.5 text-white">
                    <FaPhone />
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

            {/* Password Field */}
            <div className="relative ">
              <PassworInput
                className="rounded-lg"
                name="password"
                control={control}
                label={
                  <div className="flex gap-2 pb-2 pl-3.5 text-white">
                    <LuLockKeyhole className="h-4 w-4" />
                    Password
                  </div>
                }
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                error={errors?.password?.message}
                placeholder="Enter your password"
                trigger={trigger}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center  ">
              <button
                type="submit"
                className={`mt-2 w-44 h-10  sm:mt-4 gap-2 text-primary flex justify-center items-center bg-white rounded-lg text-xs font-bold sm:py-3.5 px-16 sm:px-20 py-3 hover:bg-gray-100 ${
                  !isValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isValid || loading}
              >
                {loading ? <Spinner name={"Running"} /> : "Login"}
              </button>
            </div>
          </form>

          {/* Forgot Password & Register */}
          <div className="mt-5 text-center">
            <Link
              to="/forgot-pass"
              className="text-white font-semibold text-sm sm:p-4 leading-6 hover:underline"
            >
              Forgot password?
            </Link>
            <p className="text-white font-light text-sm leading-6 pt-2">
              Don&apos;t have an account?{" "}
              <Link
                to={
                  redirect ? `/auth/register?redirect=${redirect}` : "/register"
                }
                className="hover:underline"
              >
                <strong className="text-sm font-semibold">Sign Up Now</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
