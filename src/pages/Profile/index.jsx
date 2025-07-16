import React, { useCallback, useEffect, useState } from 'react';
import { NetworkServices } from '../../network';
import { networkErrorHandeller } from '../../utils/helpers';
import { ImageUpload, TextInput } from '../../components/input';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({});
    const {
      register,
      handleSubmit,
      setValue,
      control,
      watch,
      trigger,
      formState: { errors },
    } = useForm();

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      const response = await NetworkServices.Profile.index();
      if (response?.status === 200) {
        setData(response?.data?.data || null);
      }
    } catch (error) {
      console.error(error);
      networkErrorHandeller(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
useEffect(() => {
  if (data) {
    setValue("company_name", data?.company_name);
    setValue("phone_number", data?.phone_number);
    setValue("email", data?.email);
    setValue("company_location", data?.company_location);
    setValue("nid", data?.nid);
    setValue("date_of_birth", data?.date_of_birth);
    setValue("shoptype", data?.shoptype);
    setValue("tread_licence", data?.tread_licence);
    setValue("contact_persone_name", data?.contact_persone_name);
    setValue("contact_persone_email", data?.contact_persone_email);
    setValue("contact_persone_phone", data?.contact_persone_phone);
    setValue("is_active", data?.is_active);
  }
}, [data, setValue]);


  const openEditModal = () => {
    setEditForm(data); // Pre-fill form with existing data
    setIsEditOpen(true);
  };
const handleUpdate = async (formData) => {
  console.log("clicked:", formData);

  try {
    const payload = new FormData();

    // Append all fields to FormData
    for (const key in formData) {
      if (formData[key] !== undefined && formData[key] !== null) {
        payload.append(key, formData[key]);
      }
    }

    // Append _method override
    // payload.append('_method', 'PUT');

    const response = await NetworkServices.Profile.update(payload); // should be POST with FormData
    if (response?.status === 200 || response?.status === 201) {
      setIsEditOpen(false);
      fetchProfile();
    } else {
      console.error('Update failed', response);
    }
  } catch (error) {
    console.error(error);
    networkErrorHandeller(error);
  }
};



  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!data) return <div className="text-center mt-10 text-red-500">No profile data found.</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6  border border-primary rounded-xl relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Vendor Profile</h1>
        <button
          onClick={openEditModal}
          className="px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow"
        >
          Edit Profile
        </button>
      </div>

      {/* Profile Content */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-start">
        <img
          src={`${import.meta.env.VITE_API_SERVER}${data?.logo}`}
          alt="Vendor Logo"
          className="w-32 h-32 rounded-full object-cover border border-gray-300 shadow"
        />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          <ProfileRow label="Company Name" value={data.company_name} />
          <ProfileRow label="Email" value={data.email} />
          <ProfileRow label="Phone" value={data.phone_number} />
          <ProfileRow label="Company Location" value={data.company_location} />
          <ProfileRow label="Date of Birth" value={new Date(data.date_of_birth).toLocaleDateString()} />
          <ProfileRow label="NID" value={data.nid} />
          <ProfileRow label="Shop Type" value={data.shoptype ?? 'N/A'} />
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${data.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {data.is_active ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>

      {/* Images & Contact */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className={`text-lg  font-semibold  mb-2`}>Trade License</h3>
          <img
            src={`${import.meta.env.VITE_API_SERVER}${data?.tread_licence}`}
            alt="Trade License"
            className=" h-32 object-contain border rounded-md"
          />
        </div>
        <div>
          <h3 className={`text-lg font-semibold  mb-2`}>Owner Contact</h3>
          <p className="text-gray-600"><strong>Name:</strong> {data.contact_persone_name ?? 'N/A'}</p>
          <p className="text-gray-600"><strong>Email:</strong> {data.contact_persone_email ?? 'N/A'}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {data.contact_persone_phone ?? 'N/A'}</p>
        </div>
      </div>

     
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <form onSubmit={handleSubmit(handleUpdate)}  className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <div className="grid grid-cols-2 gap-4">
               <TextInput
        name="company_name"
        label="Company Name"
        placeholder="Enter Company name"
        control={control}
        rules={{ required: "Company name is required" }}
        error={errors.productName?.message}
      />
               <TextInput
        name="phone_number"
        label="Phone Number"
        placeholder="Enter  phone number"
        control={control}
        rules={{ required: "phone number is required" }}
        error={errors.phone_number?.message}
      />
               <TextInput
        name="email"
        label="Email"
        placeholder="Enter Email"
        control={control}
        rules={{ required: "Email is required" }}
        error={errors.email?.message}
      />
               <TextInput
        name="company_location"
        label="Company Location"
        placeholder="Enter Company Location"
        control={control}
        rules={{ required: "Location is required" }}
        error={errors.company_location?.message}
      />
               <TextInput
        name="nid"
        label="NID"
        placeholder="Enter NID Number"
        control={control}
        rules={{ required: "Location is required" }}
        error={errors.nid?.message}
      />
               <TextInput
        name="contact_persone_name"
        label="Contact Person Name"
        placeholder="Enter Person Name"
        control={control}
        // rules={{ required: "Person Name is required" }}
        error={errors.contact_persone_name?.message}
      />
               <TextInput
        name="contact_persone_email"
        label="Contact Person Email"
        placeholder="Enter Person Email"
        control={control}
        // rules={{ required: "Person  is required" }}
        error={errors.contact_persone_email?.message}
      />
               <TextInput
        name="contact_persone_phone"
        label="Contact Person Phone"
        placeholder="Enter Person Phone"
        control={control}
        // rules={{ required: "Person  is required" }}
        error={errors.contact_persone_phone?.message}
      />
        <ImageUpload
                 name="logo"
                 control={control}
                 label="Logo"
               
                 onUpload={(file) => setValue("logo", file)}
                 imgUrl={data?.logo}
                 error={errors.logo?.message}
               />
        <ImageUpload
                 name="tread_licence"
                 control={control}
                 label="Trade licence"
               
                 onUpload={(file) => setValue("tread_licence", file)}
                 imgUrl={data?.tread_licence}
                 error={errors.tread_licence?.message}
               />


            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
              type="button"
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
              type='submit'
                className="px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-lg text-sm"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const ProfileRow = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="font-medium text-gray-800">{value}</p>
  </div>
);



export default Profile;
