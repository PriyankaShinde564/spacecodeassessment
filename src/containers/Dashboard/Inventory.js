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
import SearchIcon from "@material-ui/icons/Search";

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
export default function Inventory({ data }) {
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
  const [dense, setDense] = React.useState(false);
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const renderList = () => {
    const list = data.map((x) => (
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
            {" "}
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
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <Box border={1} className={classes.boxInput}>
            <InputBase
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
        </div>

        <div>
          <Paper className={classes.paper}>
            <TableContainer container={Paper}>
              <Table size={dense ? "small" : "medium"}>
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
