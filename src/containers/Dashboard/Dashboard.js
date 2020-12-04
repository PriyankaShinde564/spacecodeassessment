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
import Inventory from "./Inventory";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  red,
  cyan,
  purple,
  blue,
  green,
  yellow,
  lightBlue,
  teal,
  lightGreen,
} from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import Theme from "./Theme";

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

  const setBlueTheme = () => {
    const blueTheme = createMuiTheme({
      palette: {
        primary: blue,
      },
    });
    setAppTheme(blueTheme);
  };
  const setPurpleTheme = () => {
    const purpleTheme = createMuiTheme({
      palette: {
        primary: purple,
      },
    });

    setAppTheme(purpleTheme);
  };
  const setGreenTheme = () => {
    const greenTheme = createMuiTheme({
      palette: {
        primary: green,
      },
    });
    setAppTheme(greenTheme);
  };

  ///
  const setRedTheme = () => {
    const redTheme = createMuiTheme({
      palette: {
        primary: red,
      },
    });
    setAppTheme(redTheme);
  };
  const setYellowTheme = () => {
    const yellowTheme = createMuiTheme({
      palette: {
        primary: yellow,
      },
    });
    setAppTheme(yellowTheme);
  };
  const setCyanTheme = () => {
    const cyanTheme = createMuiTheme({
      palette: {
        primary: cyan,
      },
    });
    setAppTheme(cyanTheme);
  };
  const setLightBlueTheme = () => {
    const lightBlueTheme = createMuiTheme({
      palette: {
        primary: lightBlue,
      },
    });
    setAppTheme(lightBlueTheme);
  };
  const setTealTheme = () => {
    const tealTheme = createMuiTheme({
      palette: {
        primary: teal,
      },
    });
    setAppTheme(tealTheme);
  };
  const setLightGreenTheme = () => {
    const lightGreenTheme = createMuiTheme({
      palette: {
        primary: lightGreen,
      },
    });
    setAppTheme(lightGreenTheme);
  };
  const history = useHistory();

  const [appTheme, setAppTheme] = React.useState();

  let webToken;
  useEffect(() => {
    if (!props.location.state) {
      // console.log("webtoken", props.location.state.webToken);

      history.push("/user/login");
    } else if (props.location.state && props.location.state.webToken) {
      webToken = props.location.state.webToken;
    }
  });

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
          <img src={logo} height="4%" width="50%" />

          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/user/dashboard">
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link to="/user/dashboard/inventory">
              <ListItem button>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Inventory" />
              </ListItem>
            </Link>
            <Link to="/transactions">
              <ListItem button>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary="Transactions" />
              </ListItem>
            </Link>
            <Link to="/customers">
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
              </ListItem>
            </Link>
            <Link to="/reports">
              <ListItem button>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
            </Link>
            <Link to="/theme">
              <ListItem button>
                <ListItemIcon>
                  <ColorLensIcon />
                </ListItemIcon>
                <ListItemText primary="Theme" />
              </ListItem>
            </Link>
            <ListItem>
              <Box bgcolor="blue" m={0.5} p={2} onClick={setBlueTheme}></Box>
              <Box
                bgcolor="purple"
                m={0.5}
                p={2}
                onClick={setPurpleTheme}
              ></Box>
              <Box bgcolor="green" m={0.5} p={2} onClick={setGreenTheme}></Box>
            </ListItem>
            <ListItem>
              <Box bgcolor="red" m={0.5} p={2} onClick={setRedTheme}></Box>
              <Box
                bgcolor="yellow"
                m={0.5}
                p={2}
                onClick={setYellowTheme}
              ></Box>
              <Box bgcolor="cyan" m={0.5} p={2} onClick={setCyanTheme}></Box>
            </ListItem>
            <ListItem>
              <Box
                bgcolor="lightBlue"
                m={0.5}
                p={2}
                onClick={setLightBlueTheme}
              ></Box>
              <Box bgcolor="teal" m={0.5} p={2} onClick={setTealTheme}></Box>
              <Box
                bgcolor="lightGreen"
                m={0.5}
                p={2}
                onClick={setLightGreenTheme}
              ></Box>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path="/">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Dashboard
                </Typography>
              </Container>
            </Route>
            <Route exact path="/user/dashboard/inventory">
              <Container>
                <Typography variant="h3" gutterBottom>
                  inventory
                </Typography>
                <Inventory webToken={webToken} />
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
                  <Theme />
                </Typography>
              </Container>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
