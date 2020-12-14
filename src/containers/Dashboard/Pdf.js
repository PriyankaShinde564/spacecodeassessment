import React from "react";
import { useHistory } from "react-router-dom";
import Pdf from "react-to-pdf";
import {
  Button,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    maxHeight: 1000,
    justifyContent: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const ref = React.createRef();

export default function PDF(props) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          history.push("/user/inventory");
        }}
      >
        &lt;&lt;Back to Inventory
      </Button>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://o.jeweltrace.in/myData/5d39794576dfd95335e3d7de/product-images/thumb/50.jpg"
          title={props.location.state.design_category}
        />
        <CardHeader
          title={props.location.state.design_category}
          subheader={
            (props.location.state.diamond_weight,
            props.location.state.design_color)
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location.state.design_category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location.state.diamond_weight}{" "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location.state.design_color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            rfId Number : :{props.location.state.rfid_number}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            SKU : :{props.location.state.skuNumber}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            SKU Size : :{props.location.state.sku_size}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gross wt : :{props.location.state.gross_weight}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price : : {props.location.state.sales_value}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </Card>
      <div>
        <Pdf targetRef={ref} filename="post.pdf">
          {({ toPdf }) => (
            <Button variant="contained" color="secondary" onClick={toPdf}>
              Get the Pdf
            </Button>
          )}
        </Pdf>
      </div>
    </div>
  );
}
