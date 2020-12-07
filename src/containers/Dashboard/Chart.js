import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default function Chart({ data }) {
  return (
    <LineChart width={1200} height={400} data={data}>
      <Line type="monotone" dataKey="sales_value" stroke="#8884d8" dot={true} />
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      <XAxis fontSize={20} />
      <YAxis padding={{ top: 10 }} fontSize={20} />
    </LineChart>
  );
}
