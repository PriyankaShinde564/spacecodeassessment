import React from "react";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function JewelDetails(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <div style={{ float: "left", padding: "5%" }}>
          {/* <img src={props.location.state.url} height="100px" width="500px" />  // url not mentioned in JSON*/}
          <img
            src="http://o.jeweltrace.in/myData/5d39794576dfd95335e3d7de/product-images/thumb/50.jpg"
            height="100%"
            width="100%"
          />
        </div>
        <div style={{ float: "right", paddingRight: "10%" }}>
          <Box component="span" m={65}>
            <Box borderBottom={1}>
              rfid_number : :{props.location.state.rfid_number}
            </Box>
            <Box borderBottom={1}>
              skuNumber : :{props.location.state.skuNumber}
            </Box>
            <Box borderBottom={1}>
              design_code : :{props.location.state.design_code}
            </Box>
            <Box borderBottom={1}>
              design_category : :{props.location.state.design_category}
            </Box>
            <Box borderBottom={1}>
              design_color : :{props.location.state.design_color}
            </Box>
            <Box borderBottom={1}>
              sku_quantity : :{props.location.state.sku_quantity}
            </Box>
            <Box borderBottom={1}>
              sales_value : : {props.location.state.sales_value}
            </Box>
          </Box>
        </div>
      </Paper>
    </div>
  );
}
