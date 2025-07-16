import React from "react";
import { useLocation } from "react-router-dom";
import Orders from "../../components/orders/Order";

const ProcessedOrder = () => {
  const location = useLocation();

  // Parse query parameters
  // processing
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status"); // ⬅️ get `status` from URL
  console.log(status);
  const title = "Vendor | Processed-Order";
  return (
    <div>
      <Orders status={status} title={title} />
    </div>
  );
};

export default ProcessedOrder;
