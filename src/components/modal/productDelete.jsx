import React from "react";
import Spinner from "../../utils/loading/spinner";

const DeleteProductModal = ({ product, onDelete, onCancel, deleteLoading }) => {
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg m-4 p-6 w-full max-w-xl shadow-lg text-center">
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 text-red-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22m-5 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v3"
            />
          </svg>
          <h2 className="text-[#8B8B8B] mb-4">
            The Following Product will be deleted
          </h2>
          <div className="flex md:flex-row flex-col items-center font-medium justify-center gap-6 ">
            <img
              src={
                product?.product_image?.[0]
                  ? `${import.meta.env.VITE_API_SERVER}${
                      product.product_image[0]
                    }`
                  : "/placeholder.png"
              }
              alt={product?.product_name || "Product Image"}
              className="w-16 h-16 object-cover rounded"
            />

            <p>{product?.product_name}</p>
            <p>SKU: {product?.sku}</p>
            <p>Price: {product?.offer_price}/-</p>
          </div>
          <p className="mt-6 text-sm text-[#8B8B8B]">
            Are you sure wish to continue ?
          </p>
          <button
            onClick={onDelete}
            className="mt-4 w-50 h-10 text-nowrap bg-primary font-bold text-white px-10 py-2 rounded-full hover:bg-red-700"
          >
            {deleteLoading ? <Spinner name={"Deleting"} /> : "Delete Product"}
          </button>
          <button
            onClick={onCancel}
            className="mt-2 text-sm text-gray-500 hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
