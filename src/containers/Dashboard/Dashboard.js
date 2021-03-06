import React, { useState, useEffect } from "react";
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
  MenuItem,
  Button,
} from "@material-ui/core";
import Inventory from "./Inventory";
import { useHistory } from "react-router-dom";
import Theme from "./Theme";
import Chart from "./Chart";
import { grey } from "@material-ui/core/colors";
import JewelDetails from "./JewelDetails";
import PDF from "./PDF";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    backgroundColor: grey[50],
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 500,
    width: 1000,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [appTheme, setAppTheme] = useState();
  const [jwelaryData, setJwelaryData] = useState([]);
  const [appBarTitleName, setAppBarTitleName] = useState("");
  const history = useHistory();

  let webToken;
  useEffect(() => {
    if (!props.location.state) {
      // history.push("/user/login");
    } else if (props.location.state && props.location.state.webToken) {
      webToken = props.location.state.webToken;
    }
  });

  useEffect(() => {
    fetch(
      "https://d.jeweltrace.in/sku?id=5cfe1974a24ac0157013f843&rootInfo=company&page_no=3&limit=30",
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={appTheme}>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {appBarTitleName}
              <MenuItem primaryText="Refresh" />
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <Box>
              <ThemeProvider theme={appTheme}>
                <img src={logo} height="100%" width="70%" />
              </ThemeProvider>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/" style={{ paddingLeft: 13, textDecoration: "none" }}>
              <ListItem
                button
                onClick={() => {
                  setAppBarTitleName("Dashboard");
                }}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText secondary="Dashboard" />
              </ListItem>
            </Link>
            <Link
              to="/user/inventory"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <ListItem
                button
                onClick={() => {
                  setAppBarTitleName("Inventory");
                }}
              >
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText secondary="Inventory" />
              </ListItem>
            </Link>
            <Link
              to="/transactions"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <ListItem
                button
                onClick={() => {
                  setAppBarTitleName("Transactions");
                }}
              >
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText secondary="Transactions" />
              </ListItem>
            </Link>
            <Link
              to="/customers"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <ListItem
                button
                onClick={() => {
                  setAppBarTitleName("Customers");
                }}
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText secondary="Customers" />
              </ListItem>
            </Link>
            <Link
              to="/reports"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <ListItem
                button
                onClick={() => {
                  setAppBarTitleName("Reports");
                }}
              >
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText secondary="Reports" />
              </ListItem>
            </Link>
            <Link
              to="/theme"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <ListItem
                button
                onClick={() => {
                  setAppBarTitleName("Theme");
                }}
              >
                <ListItemIcon>
                  <ColorLensIcon />
                </ListItemIcon>
                <ListItemText secondary="Theme" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container>
            <Typography variant="h3" gutterBottom />

            <Switch>
              <Route exact path="/">
                <Chart />
              </Route>
              <Route exact path="/user/inventory">
                <Inventory webToken={webToken} />
              </Route>
              <Route exact path="/transactions">
                transactions
              </Route>
              <Route exact path="/customers">
                Customers
              </Route>
              <Route exact path="/reports">
                Reports
              </Route>
              <Route exact path="/theme">
                <Theme onThemeChange={setAppTheme} />
              </Route>
              <Route
                exact
                path="/user/jewelDetails"
                component={JewelDetails}
              ></Route>
              <Route exact path="/user/creatingPdf" component={PDF}></Route>
            </Switch>
          </Container>
        </main>
      </Router>
    </div>
  );
}
