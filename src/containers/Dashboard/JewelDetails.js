import React from "react";
import { Typography, Container, Paper } from "@material-ui/core";

export default function JewelDetails(props) {
  return (
    <div>
      <Container>
        <Paper>
          <Typography variant="h6" gutterBottom>
            rfid_number : :{props.location.state.rfid_number}
          </Typography>
          <Typography variant="h6" gutterBottom>
            skuNumber : :{props.location.state.skuNumber}
          </Typography>
          <Typography variant="h6" gutterBottom>
            design_code : :{props.location.state.design_code}
          </Typography>
          <Typography variant="h6" gutterBottom>
            design_category : :{props.location.state.design_category}
          </Typography>
          <Typography variant="h6" gutterBottom>
            design_color : :{props.location.state.design_color}
          </Typography>
          <Typography variant="h6" gutterBottom>
            sku_quantity : :{props.location.state.sku_quantity}
          </Typography>
          <Typography variant="h6" gutterBottom>
            sales_value : : {props.location.state.sales_value}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
