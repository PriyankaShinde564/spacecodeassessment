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
} from "@material-ui/core";
import Inventory from "./Inventory";
import { useHistory } from "react-router-dom";
import Theme from "./Theme";
import Chart from "./Chart";
import { grey } from "@material-ui/core/colors";

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
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [appTheme, setAppTheme] = useState();
  const [jwelaryData, setJwelaryData] = useState([]);
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
        console.log("jwelaryData in prizecompo  ", data.data_array);
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
            <Link
              to="/user/dashboard"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText secondary="Dashboard" />
              </ListItem>
            </Link>
            <Link
              to="/user/dashboard/inventory"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <ListItem button>
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
              <ListItem button>
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
              <ListItem button>
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
              <ListItem button>
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
              <ListItem button>
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
          <Switch>
            <Route exact path="/user/dashboard">
              <Container>
                <Typography variant="h3" gutterBottom>
                  <Chart data={jwelaryData} />
                </Typography>
              </Container>
            </Route>
            <Route exact path="/user/dashboard/inventory">
              <Container>
                <Typography variant="h3" gutterBottom>
                  inventory
                </Typography>
                <Inventory data={jwelaryData} webToken={webToken} />
              </Container>
            </Route>
            <Route exact path="/transactions">
              <Container>
                <Typography variant="h3" gutterBottom>
                  transactions
                </Typography>
              </Container>
            </Route>
            <Route exact path="/customers">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Customers
                </Typography>
              </Container>
            </Route>
            <Route exact path="/reports">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Reports
                </Typography>
              </Container>
            </Route>
            <Route exact path="/theme">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Theme
                  <Theme onThemeChange={setAppTheme} />
                </Typography>
              </Container>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
