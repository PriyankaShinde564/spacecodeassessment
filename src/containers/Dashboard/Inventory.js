import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, InputBase, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InventoryTable from "../../components/Table";

const useStyles = makeStyles((theme) => ({
  input: {
    height: 35,
    fontSize: "14px !important",
    border: "solid 1.5px #000",
    borderRadius: 6,
    color: "rgba(var(--i1d,38,38,38),1)",
    outline: 1,
    padding: "4px 4px 4px 26px",
    zIndex: 2,
  },
  typography: {
    fontWeight: "bold",
  },
}));

export default function Inventory({ webToken }) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={4}
        alignItems="center"
        style={{ marginBottom: "10px" }}
      >
        <Grid item md={3}>
          <InputBase className={classes.input} endAdornment={<SearchIcon />} />
        </Grid>
        <Grid item md={3}>
          <Typography variant="body1">
            <span className={classes.typography}>Total Stones </span>: 50
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1">
            <span className={classes.typography}>Total Carats </span>: 120
          </Typography>
        </Grid>
      </Grid>

      <InventoryTable />
    </>
  );
}
