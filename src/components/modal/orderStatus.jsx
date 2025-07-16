import React from "react";
import { NetworkServices } from "../../network";
import { networkErrorHandeller } from "../../utils/helpers";
import { Toastify } from "../toastify";

const OrderModal = ({ isOpen, onClose, order, fetchOrder }) => {
  if (!isOpen) return null;

  console.log("order", order);

  const orderStates = [
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ];

  const handleStatusChange = async (newStatus) => {
    try {
      // setStatusLoading(true);

      const formData = new FormData();
      formData.append("status", newStatus);
      formData.append("_method", "PUT");

      const response = await NetworkServices.Order.update(order.id, formData); // 🔁 Update `Order.update` as needed

      if (response && response.status === 200) {
        Toastify.Success("Order status updated!");
        fetchOrder();
        onClose();
      }
    } catch (error) {
      networkErrorHandeller(error);
    } finally {
      // setStatusLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 bg-opacity-50 z-50 px-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-h-screen flex items-center justify-center py-8"
      >
        <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-md md:max-w-2xl shadow-lg relative">
          <div className="mb-4 space-y-4">
            {/* Header Info */}
            <div className="flex flex-col md:flex-row  gap-8 text-sm font-medium px-">
              <div>
                <div className="text-gray-500">Date:</div>
                <div>
                  {order?.created_at &&
                    new Date(order.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Order ID:</div>
                <div>{order?.id}</div>
              </div>
              <div>
                <div className="text-gray-500">Customer:</div>
                <div>{order?.order?.user?.name}</div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h3 className="text-gray-600 font-semibold mb-2 text-base">
                Product Details
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                <img
                  src={`${import.meta.env.VITE_API_SERVER}${
                    order?.items[0]?.product?.thumbnail
                  }`}
                  alt="product"
                  className="w-20 h-24 object-cover rounded"
                />
                <div className="text-sm flex flex-col sm:flex-row justify-between w-full gap-4">
                  <div>
                    <p>Product Name:</p>
                    <p className="font-semibold">
                      {order?.items[0]?.product?.product_name}
                    </p>
                  </div>
                  <div>
                    <p>Quantity:</p>
                    <p className="text-center font-semibold">
                      {order?.items[0]?.quantity}
                    </p>
                  </div>
                  <div>
                    <p>Total Price:</p>
                    <p className="text-center font-semibold">{order?.total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Status Buttons */}
          <div className="text-center mt-6">
            <h4 className="text-gray-600 mb-3 font-medium">
              Update the Order State
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {orderStates.map((state) => (
                <button
                  key={state}
                  onClick={() => handleStatusChange(state)}
                  className={`px-4 py-2 rounded-full ${
                    state === order?.status
                      ? "bg-[#FF6600] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
