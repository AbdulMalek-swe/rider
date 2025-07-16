import { FaArrowRight } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '20', pv: 240, uv: 1100 },
  { name: '22', pv: 460, uv: 3600 },
  { name: '24', pv: 300, uv: 2200 },
  { name: '26', pv: 290, uv: 2400 },
  { name: '28', pv: 210, uv: 1800 },
  { name: '30', pv: 2500, uv: 2200 },
  { name: '02', pv: 200, uv: 1300 },
  { name: '04', pv: 320, uv: 2800 },
  { name: '06', pv: 230, uv: 1700 },
  { name: '08', pv: 1200, uv: 1000 },
  { name: '10', pv: 450, uv: 3500 },
  { name: '12', pv: 2700, uv: 2400 },
  { name: '14', pv: 1800, uv: 2000 },
  { name: '16', pv: 3000, uv: 2400 },
];

const DashboardChart = () => {
  return (
    <div className="w-full h-80 bg-white md:px-10 py-10 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        <a href="#" className="text-sm flex items-center gap-5 text-gray-500 hover:underline">
          Advanced Report<FaArrowRight />

        </a>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis dataKey="name" />
          <YAxis tickFormatter={(v) => `$${v}`} />
          <Tooltip formatter={(value) => `$${value}`} />

          <Bar dataKey="pv" stackId="a" fill="#CDD1DE" barSize={10} />
          <Bar dataKey="uv" stackId="a" fill="#FF8901" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
