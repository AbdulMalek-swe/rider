import { useEffect } from "react";
import BestSellers from "../../components/best-seller";
import Card from "../../components/card/Card";
import DashboardChart from "../../components/chart/Chart";
import TrafficCard from "../../components/traffic";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Vendor | Dashboard";
  }, []);
  return (
    <div>
      <Card />
      <DashboardChart />
      <div className="flex flex-col md:flex-row gap-5 my-5">
        <div className="md:w-1/2">
          <BestSellers />
        </div>
        <div className="md:w-1/2">
          <TrafficCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
