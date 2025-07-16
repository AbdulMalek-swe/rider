import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Dot
} from "recharts";

const data = [
  { date: "16", value: 1800 },
  { date: "18", value: 1600 },
  { date: "20", value: 2400 },
  { date: "22", value: 2000 },
  { date: "24", value: 2500 },
  { date: "26", value: 2500 },
  { date: "28", value: 2100 },
  { date: "30", value: 2800 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded shadow">
        {payload[0].value.toLocaleString()} visits
      </div>
    );
  }
  return null;
};

const TrafficCard = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Traffic</h2>
        </div>
        <a href="#" className="text-sm  text-gray-500 hover:underline flex items-center gap-5">
               More <span className="text-lg"> <FaArrowRight/>
      </span>
             </a>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className=" p-4 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500 flex  items-center justify-between ">Store Visits <span className="text-green-600 text-sm font-semibold">+22%</span></p>
       
            <p className="text-xl font-semibold text-gray-800">8950</p>
            
       
        </div>

        <div className=" p-4 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500 flex  items-center justify-between ">Visitors <span className="text-green-600 text-sm font-semibold">-17%</span></p>
       
            <p className="text-xl font-semibold text-gray-800">8950</p>
            
       
        </div>

      </div>

      <p className="text-sm text-gray-500 mb-2">
        Jan 16 - Jan 30 store visits chart
      </p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FFA500"
              strokeWidth={3}
              dot={{
                stroke: "#FFA500",
                strokeWidth: 2,
                fill: "#fff",
                r: 5
              }}
              activeDot={{
                fill: "#FFA500",
                r: 6
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficCard;
