import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2020", Sale: 150000, Rent: 450000 },
  { year: "2021", Sale: 250000, Rent: 550000 },
  { year: "2022", Sale: 350000, Rent: 250000 },
  { year: "2023", Sale: 450000, Rent: 850000 },
  { year: "2024", Sale: 400000, Rent: 500000 },
  { year: "2025", Sale: 650000, Rent: 750000 },
];

export default function TotalIncomeChart() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Total income</h2>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-blue-500 inline-block rounded"></span>
          <span>Sale</span>
          <span className="w-4 h-4 bg-green-500 inline-block rounded"></span>
          <span>Rent</span>
        </div>
        <select className="border rounded px-2 py-1 text-sm">
          <option>yearly</option>
          <option>monthly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Sale"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Rent"
            stroke="#22c55e"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
