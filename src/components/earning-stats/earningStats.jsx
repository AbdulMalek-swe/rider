import React, { useEffect, useState } from "react";
 
import { privateRequest } from "../../config/axios.config";
import { Toastify } from "../toastify";

const EarningStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        const res = await privateRequest.get("/rider/earnings"); // replace with your endpoint
        // Example response: { totalEarnings: 900, totalWithdrawal: 450, availableWithdrawal: 450 }
        const data = res.data;
   console.log(data,"--");
        const formattedStats = [
          {
            label: "Total Earnings",
            value: `${data?.data?.total_earning} TK`,
            color: "bg-gradient-to-r from-[#D623FE] to-[#A530F2]",
          },
          {
            label: "Total Withdrawal",
            value: `${data?.data?.withdrawn
} TK`,
            color: "bg-gradient-to-r from-[#FA6464] to-[#DC2626]",
          },
          {
            label: "Available Withdrawal",
            value: `${data?.data?.available_to_withdraw} TK`,
            color: "bg-gradient-to-r from-[#6BAAFC] to-[#305FEC]",
          },
        ];

        setStats(formattedStats);
      } catch (error) {
        console.error("Error fetching earnings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEarnings();
  }, []);
 const handleWithdraw = async () => {
    try {
      const res = await privateRequest.post("/rider/withdraw", {
        // dynamic (use logged-in rider id)
        amount: 100, // dynamic value
        account_number: "01798765", // dynamic value
      });
      console.log(res);
      Toastify.Success(res.data.message);
    } catch (error) {
      console.error(error);
      // alert("Withdraw request failed!");
    }
  }
  if (loading) {
    return <p className="text-center text-gray-500">Loading earnings...</p>;
  }
  
  return (
    <div className="grid grid-cols-1 font-poppins sm:grid-cols-3 gap-4 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`rounded-xl text-white p-5 shadow-md ${stat.color} relative`}
        >
          <p className="text-sm font-medium">{stat.label}</p>
          <p className="text-5xl font-semibold">{stat.value}</p>
          { index===2&&<button onClick={handleWithdraw} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-blue-700 font-semibold px-4 py-3 rounded hover:bg-gray-200">Withdraw</button>}
        </div>
      ))}
    </div>
  );
};

export default EarningStats;
