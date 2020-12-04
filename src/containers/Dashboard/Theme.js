import React, { useEffect } from "react";
import logo from "../../Assets/logo.png";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
  ThemeProvider,
  Box,
} from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

export default function Theme(props) {
  const setBlueTheme = () => {
    const blueTheme = createMuiTheme({
      palette: {
        primary: blue,
      },
    });
    setAppTheme(blueTheme);
  };
  const setPinkTheme = () => {
    const pinkTheme = createMuiTheme({
      palette: {
        primary: purple,
      },
    });

    setAppTheme(pinkTheme);
  };
  const setGreenTheme = () => {
    console.log("green");
    const greenTheme = createMuiTheme({
      palette: {
        primary: green,
      },
    });
    setAppTheme(greenTheme);
  };

  const [appTheme, setAppTheme] = React.useState();

  return (
    <div>
      <ListItem>
        <Box bgcolor="blue" m={0.5} p={2} onClick={setBlueTheme}></Box>
        <Box bgcolor="purple" m={0.5} p={2} onClick={setPinkTheme}></Box>
        <Box bgcolor="green" m={0.5} p={2} onClick={setGreenTheme}></Box>
      </ListItem>
    </div>
  );
}
