import React from "react";
import { useLocation } from "react-router-dom";
import Orders from "../../components/orders/Order";

const CompletedOrder = () => {
  const location = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status"); 
  console.log(status);
  const title = "Vendor | Complete-Order";
  return (
    <div>
      <Orders status={status} title={title} />
    </div>
  );
};

export default CompletedOrder;
