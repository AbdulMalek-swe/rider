import React, { useCallback, useEffect, useState } from "react";
import { NetworkServices } from "../../network";
import { useParams } from "react-router-dom";
import { privateRequest } from "../../config/axios.config";

const OrderDetails = () => {
  const router = useParams();
  console.log(router);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const orderStates = [
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ];

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await NetworkServices.Order.show(router?.id);
      console.log(response);
      if (response?.status === 200) {
        setData(response?.data?.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false);
    }
  }, [router?.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const { user, rider, vendors, order, address } = data;
//   picket order status 
  const handleOrderPickedStatus = async (id) => {
    try {
      const data = {
        _method: "PUT",
        status: "picked_up",
      };
      const response = await privateRequest.post(
        `rider/sub-orders/status/${id}`,
        data
      );
      if (response?.data?.success) {
        fetchData();
      } 
    } catch (error) {}
  };
//   order status change 
  const handleOrderStatus = async (status) => {
    try {
      const data = {
        _method: "PUT",
        status: status,
      };
      const response = await privateRequest.post(
        `rider/order/status/${router?.id}`,
        data
      );
      if (response?.data?.success) {
        fetchData();
      } 
    } catch (error) {}
  };
  return (
    <div className="p-6 space-y-6  rounded-md">
      {/* User Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-4 rounded-md bg-white shadow-xs">
          <h2 className="text-xl font-semibold mb-4 text-[#8B8B8B]">
            User Information
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.VITE_API_SERVER}${user?.photo}`}
              alt="user"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p>
                <span className="font-bold text-gray-700">Name:</span>{" "}
                <span className="text-black">{address?.name}</span>
              </p>
              <p>
                <span className="font-bold text-gray-700">Phone:</span>{" "}
                <span className="text-black">{address?.phone}</span>
              </p>
              <p>
                <span className="font-bold text-gray-700">Shipping:</span>{" "}
                <span className="text-black">{address?.address_line1}</span>
                <p className="text-black">
                  {address?.area?.name} - {address?.city?.name} -{" "}
                  {address?.division?.name}
                </p>
              </p>
              {/* <p>
                <span className="font-medium text-gray-700">Phone:</span>{" "}
                <span className="text-black">{user?.phone}</span>
              </p> */}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-md bg-white shadow-xs">
          <h2 className="text-xl font-semibold mb-4 text-[#8B8B8B]">
            Rider Information
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.VITE_API_SERVER}${rider?.profile_image}`}
              alt="user"
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <p>
                <span className="font-medium text-gray-700">Name:</span>{" "}
                <span className="text-black">{rider?.name}</span>
              </p>
              <p>
                <span className="font-medium text-gray-700">Phone:</span>{" "}
                <span className="text-black">{rider?.phone_number}</span>
              </p>
              <p>
                <span className="font-medium text-gray-700">Email:</span>{" "}
                <span className="text-black">{rider?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Status Buttons */}
      <div className="text-center mt-6">
        <h4 className="text-gray-600 mb-3 font-medium">Order State</h4>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {orderStates.map((state) => (
            <button
              key={state}
              //   onClick={() => handleStatusChange(state)}
              className={`px-4 py-2 rounded-full ${
                state === data?.order_status
                  ? "bg-[#FF6600] text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
              onClick={()=>handleOrderStatus(state)}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* Vendors and Products */}
      <div className="space-y-10">
        {vendors?.map((vendor, vendorIndex) => (
          <div
            key={vendorIndex}
            className="border border-gray-300 rounded-lg p-4"
          >
            {/* Vendor Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Vendor: {vendor?.company_name}
            </h2>

            {/* Product Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="p-3 font-semibold text-gray-600 w-20">
                      Image
                    </th>
                    <th className="p-3 font-semibold text-gray-600 w-[400px]">
                      Product Name
                    </th>
                    <th className="p-3 font-semibold text-gray-600">
                      Quantity
                    </th>
                    <th className="p-3 font-semibold text-gray-600 truncate">
                      Unit Price
                    </th>
                    <th className="p-3 font-semibold text-gray-600 truncate">
                      Total Price
                    </th>
                    <th className="p-3 font-semibold text-gray-600 flex gap-1 items-center truncate">
                      <div
                        onClick={() =>
                          vendor?.status !== "picked_up" &&
                          handleOrderPickedStatus(vendor?.sub_order_id)
                        }
                        className="gap-1 flex items-center disabled:bg-amber-50 cursor-pointer"
                      >
                        {" "}
                        <input
                          checked={
                            vendor?.status === "picked_up" ? true : false
                          }
                          type="checkbox"
                        />
                        <button>Picked Up</button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vendor?.items?.map((product, productIndex) => (
                    <tr key={productIndex}>
                      <td className="p-2">
                        <img
                          src={`${import.meta.env.VITE_API_SERVER}${
                            product?.product.thumbnail
                          }`}
                          alt={product?.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                      </td>
                      <td className="p-2">{product?.product.product_name}</td>
                      <td className="p-2">{product?.quantity}</td>
                      <td className="p-2">৳{Math.round(product?.price)}</td>
                      <td className="p-2">
                        ৳{product?.quantity * product?.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
