import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function Inventory(props) {
  const [jwelaryData, setJwelaryData] = useState({});
  function getAPI() {
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
        console.log("jwelaryData  ", data);
        setJwelaryData({ data });
      });
  }

  //  const renderList = () => {
  //     const list = jwelaryData.map((x) => (
  //       <TableRow >
  //       <TableCell>one</TableCell>
  //       <TableCell>two</TableCell>
  //       <TableCell>three</TableCell>
  //       <TableCell>four</TableCell>
  //     </TableRow>

  //     ));
  //     return list;
  //   };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Inventory Component
        {/* <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>one</TableCell>
                <TableCell>two</TableCell>
                <TableCell>three</TableCell>
                <TableCell>four</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderList()}</TableBody>
          </Table>
        </div>
       */}
      </Typography>
    </div>
  );
}
