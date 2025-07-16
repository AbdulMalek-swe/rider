 import Orders from "../../components/orders/Order";
import { useParams } from "react-router-dom";

// Main component
const AllOrderList = () => {
  const { status } = useParams();
  const title = "Vendor | All-Order";
  return <Orders status={status} title={title} />;
};

export default AllOrderList;
