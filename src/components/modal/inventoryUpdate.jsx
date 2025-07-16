import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../input";
import { NetworkServices } from "../../network";
import { Toastify } from "../toastify";
import { networkErrorHandeller } from "../../utils/helpers";

const InventorModal = ({ isOpen, onClose, product,fetchInventory }) => {
  console.log("product", product);
  // ✅ Always call useForm at the top level
  const {
    control,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (!isOpen) return null;

  const handleStockUpdate = async (data) => {
    try {
    //   setStatusLoading(true);

      const formData = new FormData();
      formData.append("stock", data.quantity);
    //   formData.append("_method", "PUT");

      const response = await NetworkServices.Inventory.store(
        product.id,
        formData
      );

      if (response && response.status === 200) {
        Toastify.Success("Stock updated successfully!");
        fetchInventory(); 
        onClose(); 
      }
    } catch (error) {
      networkErrorHandeller(error);
    } finally {
    //   setStatusLoading(false);
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
            {/* Product Info */}
            <div>
              <div className="flex flex-col sm:flex-row gap-4 items-center p-4 border border-gray-200 rounded-lg">
                <img
                  // src="/image/products/image.svg"
                  src={`${import.meta.env.VITE_API_SERVER}${
                    product?.thumbnail
                  }`}
                  alt="product"
                  className="w-20 h-24 object-cover rounded"
                />
                <div className="text-sm flex flex-col sm:flex-row justify-between w-full gap-4">
                  <div>
                    <p className="font-semibold">{product?.product_name}</p>
                  </div>
                  <div>
                    <p>
                      SKU: <strong>{product?.sku}</strong>
                    </p>
                  </div>
                  <div>
                    <p>
                      Price: <strong>{product?.reguler_price}/-</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          {/* Form Section */}
          <form onSubmit={handleSubmit(handleStockUpdate)}>
            <p className="font-medium">In Stock</p>
            <div className="flex flex-row gap-4 items-end">
              <TextInput
                name="quantity"
                control={control}
                placeholder="Enter quantity"
                type="number"
                defaultvalue={product.stock}
                error={errors?.quantity?.message}
                className="w-full"
                trigger={trigger}
                rules={{ required: "Stock is required" }}
              />

              <button
                type="submit"
                // disabled={statusLoading}
                className="bg-primary text-white rounded-full px-5 py-1 disabled:opacity-50"
              >
                {/* {statusLoading ? "Updating..." : "Update"} */}
update
              </button>
            </div>
          </form>
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

export default InventorModal;
