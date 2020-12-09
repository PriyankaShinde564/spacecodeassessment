import React, { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default function Chart() {
  const [jewelaryData, setJewelaryData] = useState([]);
  useEffect(() => {
    fetch(
      "https://d.jeweltrace.in/sku?id=5cfe1974a24ac0157013f843&rootInfo=company&page_no=0&limit=10",
      {
        method: "GET",
        headers: {
          "x-web-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjUyNTIiLCJuYW1lIjoiUGFua2FqIEdveWFuaSIsInBhc3N3b3JkIjoiYWRtaW4iLCJyb290Ijp7InN1YlNlY3Rpb25JZCI6IjVkMzk3OTQ1NzZkZmQ5NTMzNWUzZDdlMiIsInNlY3Rpb25JZCI6IjVkMzk3OTQ1NzZkZmQ5NTMzNWUzZDdlMSIsImZsb29ySWQiOiI1ZDM5Nzk0NTc2ZGZkOTUzMzVlM2Q3ZTAiLCJicmFuY2hJZCI6IjVkMzk3OTQ1NzZkZmQ5NTMzNWUzZDdkZiIsImNvbXBhbnlJZCI6IjVkMzk3OTQ1NzZkZmQ5NTMzNWUzZDdkZSJ9LCJlbXBJZCI6Im5laGEucGFybWFyQHNwYWNlY29kZS5jb20iLCJ1c2VydHlwZSI6IkFETUlOIiwiaWF0IjoxNjA2OTczNTg4LCJleHAiOjE2MjcyMDYwODV9.4iQwzx_i-J0P_0CyHqX4amszSwCbKqTXGy1V1rN38WE",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setJewelaryData(data.data_array);
      });
  }, []);
  return (
    <LineChart width={1200} height={400} data={jewelaryData}>
      <Line type="monotone" dataKey="sales_value" stroke="#8884d8" dot={true} />
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      <XAxis fontSize={20} />
      <YAxis padding={{ top: 10 }} fontSize={20} />
    </LineChart>
  );
}
