import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Property Maintenance", value: 50, color: "#3366FF" },
  { name: "Management Fees", value: 25, color: "#FF0000" },
  { name: "Utility Bill", value: 25, color: "#FF8C32" },
];

const ExpensesChart = () => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-[300px] max-w-sm">
      <h2 className="text-lg font-semibold mb-2">Expenses</h2>
      <div className="relative">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          30%
          <p className="text-sm text-gray-500 absolute top-10">
            From yearly revenue
          </p>
        </div>
      </div>
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <span
              className="w-4 h-4 inline-block"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesChart;
