import React, { useState, useEffect } from "react";
import "./table.css";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Grid, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { TableHead } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  background: {
    backgroundColor: "red",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 600,
    padding:"1px",
  },
  tableHeader: {
    backgroundColor: "#878787",
    textAlign: "center",
  },
  iconColor: {
    fontSize: "medium",
  },
});

export default function InventoryTable({ data }) {
  const classes = useStyles2();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [jewelData, setJewelData] = useState([]);
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    fetch(
      `https://d.jeweltrace.in/sku?id=5cfe1974a24ac0157013f843&rootInfo=company&page_no=${page}&limit=${rowsPerPage}`,
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
        setJewelData(data.data_array);
      });
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="tableRow">
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell className={classes.tableCell} align="left">
              SKU
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Design Code
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Material
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Design Category
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Diamond Ct.
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Net Weight
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Price
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              SKU Qty
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Date
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jewelData.map((row) => (
            <TableRow key={row.design_code}>
              <TableCell align="left">{row.sku_number}</TableCell>
              <TableCell align="left">{row.design_code}</TableCell>
              <TableCell align="left">{row.metal_type}</TableCell>
              <TableCell align="left">{row.design_category}</TableCell>
              <TableCell align="left">{row.diamond_weight}</TableCell>
              <TableCell align="left">{row.net_weight}</TableCell>
              <TableCell align="left">{row.sales_value}</TableCell>
              <TableCell align="left">{row.sku_quantity}</TableCell>
              <TableCell align="left">
                <Moment format="DD-MM-YYYY">{row.createdAt}</Moment>
              </TableCell>
              <TableCell align="left">
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <IconButton
                      onClick={() => {
                        history.push("/user/jewelDetails", {
                          skuNumber: row.sku_number,
                          url: row.url,
                          rfid_number: row.rfid_number,
                          design_code: row.design_code,
                          design_category: row.design_category,
                          design_color: row.design_color,
                          sku_quantity: row.sku_quantity,
                          sales_value: row.sales_value,
                        });
                      }}
                    >
                      <VisibilityIcon className={classes.iconColor} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={() => {
                        history.push("/user/creatingPdf", {
                          skuNumber: row.sku_number,
                          url: row.url,
                          rfid_number: row.rfid_number,
                          design_code: row.design_code,
                          design_category: row.design_category,
                          design_color: row.design_color,
                          sku_quantity: row.sku_quantity,
                          sales_value: row.sales_value,
                        });
                      }}
                    >
                      <PictureAsPdfIcon className={classes.iconColor} />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={140}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
