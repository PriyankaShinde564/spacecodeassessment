import React, { useState, useEffect } from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputBase,
  Box,
  Button,
  Paper,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import SearchBar from "material-ui-search-bar";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  boxInput: {
    transition: theme.transitions.create("width"),
    width: "30%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

export default function Inventory() {
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white,
      fontSize: 16,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const [dense, setDense] = React.useState(true);
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const [jwelaryData, setJwelaryData] = useState([]);
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
        setJwelaryData(data.data_array);
      });
  }, []);
  const renderList = () => {
    const list = jwelaryData.map((x) => (
      <TableRow key={x.sku_number}>
        <StyledTableCell>{x.sku_number}</StyledTableCell>
        <StyledTableCell>{x.design_code}</StyledTableCell>
        <StyledTableCell>{x.metal_type}</StyledTableCell>
        <StyledTableCell>{x.design_category}</StyledTableCell>
        <StyledTableCell>{x.diamond_weight}</StyledTableCell>
        <StyledTableCell>{x.net_weight}</StyledTableCell>
        <StyledTableCell>{x.sales_value}</StyledTableCell>
        <StyledTableCell>{x.sku_quantity}</StyledTableCell>
        <StyledTableCell>Date</StyledTableCell>
        <StyledTableCell>
          <Button>
            <VisibilityOutlinedIcon />
          </Button>
          <Button>
            <InsertDriveFileOutlinedIcon />
          </Button>
        </StyledTableCell>
      </TableRow>
    ));
    return list;
  };

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState();

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, jwelaryData.length - page * rowsPerPage);

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        <div>
          <SearchBar
            value={searchValue}
            onChange={(newValue) => setSearchValue({ value: newValue })}
            placeholder="search"
            // onRequestSearch={() => doSomethingWith(searchValue)}
            style={{
              width: "17%",
              backgroundColor: grey[200],
              color: grey[500],
              marginBottom: "2%",
              marginTop: "2%",
            }}
          />
        </div>

        <div>
          <Paper className={classes.paper}>
            <TableContainer container={Paper}>
              <Table
                size={dense ? "small" : "medium"}
                style={{ alignContent: "center" }}
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>SKU</StyledTableCell>
                    <StyledTableCell>Design Code</StyledTableCell>
                    <StyledTableCell>Material</StyledTableCell>
                    <StyledTableCell>Design Category</StyledTableCell>
                    <StyledTableCell>Diamond Ct.</StyledTableCell>
                    <StyledTableCell>Net Weight</StyledTableCell>
                    <StyledTableCell>Price</StyledTableCell>
                    <StyledTableCell>SKU Qty</StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {renderList()}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </div>
      </Typography>
    </div>
  );
}
