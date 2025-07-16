import { DashboardLayout } from "../layouts/dashboard.layout"; 
import Dashboard from "../pages/Dashboard/Dashboard";
import Earning from "../pages/earning";
import Withdrawal from "../pages/earning/Withdrawal";
import Inventory from "../pages/inventory";

import AllOrderList from "../pages/order"; 
import CanceledOrder from "../pages/order/Cencel-order";

import CompletedOrder from "../pages/order/Completed-order";
import OrderDetails from "../pages/order/OrderDetails";
import PendingOrders from "../pages/order/pending-order";
import ProcessedOrder from "../pages/order/processed-order";
import ShippedOrder from "../pages/order/shipped-order";  
import Profile from "../pages/Profile";

import { getToken } from "../utils/helpers";

const appRoutes = [
  {
    path: "/dashboard",  // Ensure the path is absolute
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },   
      { path: "orders", element: <AllOrderList /> },  
      { path: "order/:id", element: <OrderDetails /> },  
      { path: "inventory", element: <Inventory /> },
      { path: "earnings", element: <Earning /> },    
      { path: "pending-orders", element: <PendingOrders/> }, 
      { path: "processed-orders", element: <ProcessedOrder/> }, 
      { path: "shipped-orders", element: <ShippedOrder/> }, 
      { path: "completed-orders", element: <CompletedOrder/> },  
      { path: "canceled-orders", element: <CanceledOrder/> },  
      { path: "withdrawal", element: <Withdrawal/> },  
      { path: "profile", element: <Profile/> },  
    ],
  },
];

export const permittedRoutes = () => {
  const token = getToken();
  if (token) {
    return appRoutes;
  }
  return [];
};
