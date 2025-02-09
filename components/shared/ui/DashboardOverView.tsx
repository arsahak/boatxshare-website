"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", order: 6, complete: 4 },
  { name: "Feb", order: 12, complete: 4 },
  { name: "Mar", order: 9, complete: 5 },
  { name: "Apr", order: 7, complete: 7 },
  { name: "May", order: 11, complete: 9 },
  { name: "Jun", order: 5, complete: 4 },
  { name: "Jul", order: 14, complete: 12 },
  { name: "Aug", order: 12, complete: 7 },
  { name: "Sep", order: 0, complete: 0 },
  { name: "Oct", order: 0, complete: 0 },
  { name: "Nov", order: 0, complete: 0 },
  { name: "Dec", order: 0, complete: 0 },
];

const DashboardOverView = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        {/* <YAxis tickFormatter={(value) => `$${Number(value) / 1000}k`} /> */}
        {/* <Tooltip formatter={(value) => `$${Number(value) / 1000}k`} /> */}
        <Legend />
        <Bar dataKey="order" fill="#d3d3d3" />
        <Bar dataKey="complete" fill="#0b213f" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DashboardOverView;
