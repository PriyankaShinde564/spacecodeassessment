import React, { useState } from "react";
import { Box, Paper, Typography, Button, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    maxWidth: 2000,
    maxHeight: 5000,
  },
  upload: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function JewelDetails(props) {
  const history = useHistory();
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(
    "http://o.jeweltrace.in/myData/5d39794576dfd95335e3d7de/product-images/thumb/50.jpg"
  );

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
      <Typography component="h1" variant="h6">
        Inventory &gt;&gt;{props.location.state.skuNumber}
      </Typography>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div style={{ float: "left", padding: "5%" }}>
            {/* <img src={props.location.state.url} height="100px" width="500px" />  // url not mentioned in JSON*/}
            <img src={selectedImage} height="100%" width="100%" />
          </div>

          <div style={{ float: "right", paddingRight: "10%" }}>
            <Box component="span" m={70}>
              <Typography variant="body2" color="textSecondary" component="p">
                <Box borderBottom={1}>
                  rfid_number : :{props.location.state.rfid_number}{" "}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                <Box borderBottom={1}>
                  skuNumber : :{props.location.state.skuNumber}{" "}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                <Box borderBottom={1}>
                  design_code : :{props.location.state.design_code}{" "}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                <Box borderBottom={1}>
                  design_category : :{props.location.state.design_category}{" "}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                <Box borderBottom={1}>
                  design_color : :{props.location.state.design_color}{" "}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                <Box borderBottom={1}>
                  sku_quantity : :{props.location.state.sku_quantity}{" "}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                <Box borderBottom={1}>
                  sales_value : : {props.location.state.sales_value}{" "}
                </Box>
              </Typography>
            </Box>
          </div>
        </Paper>
        {/* upload image  */}
        <div className={classes.upload}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={() => {
                setSelectedImage("image/*");
              }}
            >
              Upload Image
            </Button>
          </label>
        </div>
      </div>
    </div>
  );
}
