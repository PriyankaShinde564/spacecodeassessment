import React from "react";
import logo from "../../Assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Paper,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  InputAdornment,
  FormControl,
  IconButton,
  Input,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import clsx from "clsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Spacecode SAS.
      </Link>
      {new Date().getFullYear()}
      {"."}
      all rights reserved.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    alignContent: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    alignContent: "center",
    width: "45ch",
  },
}));

export default function UserLogin(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    webToken: "",
  });
  const history = useHistory();

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    const user = {
      username: values.email,
      password: values.password,
    };

    fetch("https://d.jeweltrace.in/login", {
      method: "POST",
      headers: { "Content-Type": "application/json", type: "Web" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Success:", res);
        if (res.status) {
          history.push("/user/dashboard", {
            webToken: res.data.web_token[0],
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container component="main" maxWidth="xs" justify="center">
      <Paper className={classes.paper}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            justifyContent="center"
            item
            xs={25}
            sm={25}
            md={13}
            lg={13}
            style={{
              textAlign: "center",
            }}
          >
            <img src={logo} height="70%" width="70%" justify="center" />
          </Typography>
          <form className={classes.form} noValidate>
            <div>
              <EmailIcon />
              <TextField
                id="standard-start-adornment"
                className={clsx(classes.margin, classes.textField)}
                value={values.email}
                onChange={handleChange("email")}
              />
            </div>
            <div>
              <LockIcon />
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <Grid
              item
              xs={25}
              sm={25}
              md={13}
              lg={13}
              style={{
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Checkbox
                  checked={checked}
                  onChange={handleChangeCheck}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                Secure Login
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Paper>
    </Container>
  );
}
