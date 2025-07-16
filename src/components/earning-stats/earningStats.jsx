import React from 'react';

const stats = [
  { label: "Total Earnings", value: "900 TK", color: "bg-gradient-to-r from-[#D623FE] to-[#A530F2]"
 },
  { label: "Total Withdrawal", value: "450 TK", color: "bg-gradient-to-r from-[#FA6464] to-[#DC2626]"
 },
  { label: "Available Withdrawal", value: "450 Tk", color: "bg-gradient-to-r from-[#6BAAFC] to-[#305FEC]"
 },
];
const EarningStats = () => {
  return (
      <div className="grid grid-cols-1 font-poppins sm:grid-cols-3 gap-4 w-full">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl text-white  p-5 shadow-md ${stat?.color}`}
          >
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="text-5xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
  );
};

export default EarningStats;