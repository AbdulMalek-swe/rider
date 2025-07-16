import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Toastify } from "../../components/toastify";
import { publicRequest } from "../../config/axios.config";
import { ImageUpload, TextInput } from "../../components/input";
import { networkErrorHandeller } from "../../utils/helpers";
import useCurrentLocation from "../../components/hook/useCurrentLocation ";

const Register = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { latLng  } = useCurrentLocation();
  

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("phone_number", data.phone_number);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("date_of_birth", data.date_of_birth); 
    // formData.append("company_location", data.company_location);
    formData.append("nid_front", data.logo);
    formData.append("nid_back", data.tread_licence);
    formData.append("profile_image", data.profile_image);

    formData.append("latitude", latLng.lat);
    formData.append("longitude", latLng.lng);

    try {
      const response = await publicRequest.post("rider/register", formData);

      Toastify.Success("Registration successful!");
      navigate(`/verify-otp?id=${response?.data?.data?.phone_number}`);
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
          Vendor Registration
        </span>

        <div className="w-full bg-[#8B70D1] my-5 sm:w-[600px] p-6 sm:p-10 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-white"
          >
             {/* Company Name */}
            <TextInput
              name="name"
              className="rounded-lg"
              control={control}
              type="text"
              label=" Name"
              placeholder="Enter   name"
              rules={{ required: " name is required" }}
              trigger={trigger}
              error={errors?.name?.message}
            />
            {/* Phone */}
            <TextInput
              name="phone_number"
              className="rounded-lg"
              control={control}
              type="text"
              label="Phone Number"
              placeholder="Enter phone number"
              rules={{ required: "Phone number is required" }}
              trigger={trigger}
              error={errors?.phone_number?.message}
            />

           

            {/* Email */}
            <TextInput
              name="email"
              className="rounded-lg"
              control={control}
              type="email"
              label="Email"
              placeholder="Enter email"
              rules={{ required: "Email is required" }}
              trigger={trigger}
              error={errors?.email?.message}
            />

            {/* DOB */}
            <TextInput
              name="date_of_birth"
              className="rounded-lg"
              control={control}
              type="date"
              label="Date of Birth"
              rules={{ required: "Date of birth is required" }}
              trigger={trigger}
              error={errors?.date_of_birth?.message}
            />

            {/* logo */}
            <div className="mt-4 cursor-pointer">
              <ImageUpload
                name="profile_image"
                control={control}
                label="Profile Image"
                // required
                onUpload={(file) => setValue("profile_image", file)}
                error={errors.profile_image?.message}
              />
            </div>
            <div className="mt-4 cursor-pointer">
              <ImageUpload
                name="logo"
                control={control}
                label="Logo"
                // required
                onUpload={(file) => setValue("logo", file)}
                error={errors.logo?.message}
              />
            </div>
            {/* licence */}
            <div className="mt-4 cursor-pointer">
              <ImageUpload
                name="tread_licence"
                control={control}
                label="Tread Licence"
                // required
                onUpload={(file) => setValue("tread_licence", file)}
                error={errors.logo?.message}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-primary font-bold w-full py-3 rounded-md hover:bg-gray-100 mt-4"
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
