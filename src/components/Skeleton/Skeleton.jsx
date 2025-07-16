import React from "react";

export const TableSkeleton = () => {
  return (
    <div className="space-y-2">
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 justify-between border-b border-gray-200 dark:border-gray-700 min-h-[100px] px-4 py-4"
          >
            {/* SN */}
            <div className="w-[80px] flex justify-center">
              <div className="h-6 w-6 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
            </div>

            {/* Photo */}
            <div className="w-[160px] flex justify-center">
              <div className="h-24 w-24 bg-gray-200 rounded-md shadow-sm animate-pulse dark:bg-gray-700" />
            </div>

            {/* Product Name */}
            <div className="flex-1 max-w-[20%] pl-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse dark:bg-gray-700 mb-2" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
            </div>

            {/* SKU */}
            <div className=" flex justify-center">
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
            </div>

            {/* Price */}
            <div className=" flex justify-center">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
            </div>

            {/* Action buttons */}
            <div className=" flex justify-center gap-3 text-lg">
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700" />
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700" />
            </div>
          </div>
        ))}
    </div>
  );
};


export  const InventoryTableSkeleton = () => {
  const rowCount = 6; // You can change this based on rows per page

  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
      {/* Table Head */}
      <div className="grid grid-cols-6 bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
        <div className="text-center">SN</div>
        <div>Name</div>
        <div>SKU</div>
        <div className="text-center">Stock</div>
        <div className="text-center">Sold</div>
        <div className="text-center">Action</div>
      </div>

      {/* Skeleton Rows */}
      {Array.from({ length: rowCount }).map((_, idx) => (
        <div
          key={idx}
          className="grid grid-cols-6 gap-2 items-center px-4 py-4 border-t border-gray-200 dark:border-gray-700"
        >
          {/* SN */}
          <div className="flex justify-center">
            <div className="h-4 w-4 rounded bg-gray-200 animate-pulse dark:bg-gray-700" />
          </div>

          {/* Name */}
          <div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* SKU */}
          <div>
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Stock */}
          <div className="flex justify-center">
            <div className="h-4 w-8 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Sold */}
          <div className="flex justify-center">
            <div className="h-4 w-10 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Action */}
          <div className="flex justify-center">
            <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
};



export const OrderTableSkeleton = () => {
  const rowCount = 6;

  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
      {/* Table Header */}
      <div className="grid grid-cols-9 bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
        <div className="text-center">SN</div>
        <div>Date</div>
        <div>Customer</div>
        <div>Order No</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Price</div>
        <div className="text-center">Order Status</div>
        <div className="text-center">Payment</div>
        <div className="text-center">Action</div>
      </div>

      {/* Skeleton Rows */}
      {Array.from({ length: rowCount }).map((_, idx) => (
        <div
          key={idx}
          className="grid grid-cols-9 items-center px-4 py-4 border-t border-gray-200 dark:border-gray-700"
        >
          {/* SN */}
          <div className="flex justify-center">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Date */}
          <div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Customer */}
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Order No */}
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Quantity */}
          <div className="flex justify-center">
            <div className="h-4 w-10 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Price */}
          <div className="flex justify-center">
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Order Status */}
          <div className="flex justify-center">
            <div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700" />
          </div>

          {/* Payment */}
          <div className="flex justify-center">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-2">
            <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse dark:bg-gray-700" />
            <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
};


export const EarningsTableSkeleton = () => {
  const rowCount = 6;

  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
      {/* Table Head */}
      {/* <div className="grid grid-cols-5  bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
        <div className="text-left">SN</div>
        <div>Name</div>
        <div>Order ID</div>
        <div className="text-right">Amount</div>
        <div className="text-center">Action</div>
      </div> */}

      {/* Skeleton Rows */}
      {Array.from({ length: rowCount }).map((_, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 items-center px-4 gap-2 py-4 border-t border-gray-200 dark:border-gray-700"
        >
          {/* SN */}
          <div>
            <div className="h-4 w-6 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Name */}
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Order ID */}
          <div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Amount */}
          <div className="flex justify-end">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Action */}
          <div className="flex justify-center">
            <div className="h-6 w-6 rounded-full bg-gray-200 animate-pulse dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
};


export const MyWithDrawSkeleton = () => {
  const rowCount = 6; // same as your pagination size

  return (
    <div className="w-full space-y-1 px-4">
      {Array.from({ length: rowCount }).map((_, idx) => (
        <div
          key={idx}
          className="grid grid-cols-6 items-center gap-4 py-3 border-b border-gray-200 dark:border-gray-700"
        >
          {/* SN */}
          <div className="flex justify-start">
            <div className="h-4 w-6 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Method */}
          <div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Amount */}
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Charge */}
          <div>
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse dark:bg-gray-700" />
          </div>

          {/* Status */}
          <div className="flex justify-start">
            <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700" />
          </div>

          {/* Action */}
          <div className="flex justify-center">
            <div className="h-5 w-5 rounded-full bg-gray-200 animate-pulse dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  );
};


