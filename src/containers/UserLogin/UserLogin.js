import React from "react";

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
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    width: "45ch",
  },
}));

export default function UserLogin() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
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

  return (
    <Container component="main" maxWidth="xs" justify="center">
      <Paper className={classes.paper}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <img
              src="C:\Users\shind\Work\snapcodeassessment\src\Logo\logo.png"
              height="100%"
              width="100%"
            />
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              id="standard-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              align="center"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
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