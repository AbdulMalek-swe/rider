import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../../../config/axios.config";
import { Toastify } from "../../../components/toastify";
import { PassworInput } from "../../../components/input";
import { LuLockKeyhole } from "react-icons/lu";
import { networkErrorHandeller } from "../../../utils/helpers";

const PassSetup = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get("id");
  const code = queryParams.get("code");

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData(); 
    formData.append("phone", id);
    formData.append("code", code);
    formData.append("password", data.password); 
    try {
      const response = await publicRequest.post(
        "rider/forgot-password-update",
        formData
      );
      if (response?.data?.success) {
        Toastify.Success("set password successful!");
        navigate("/dashboard");
      }
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
          Set New Password
        </span>

        <div className="w-full bg-[#8B70D1] my-5 sm:w-[600px] p-6 sm:p-10 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-white"
          >
            {/* Phone */}
            <div className="relative mt-5">
              <PassworInput
                className="rounded-lg"
                name="password"
                control={control}
                label={
                  <div className="flex gap-2 pb-2 pl-3.5 text-white">
                    <LuLockKeyhole className="h-5 w-5" />
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-primary font-bold w-full py-3 rounded-md hover:bg-gray-100 mt-4"
            >
              {loading ? "Submitting..." : "New Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PassSetup;
