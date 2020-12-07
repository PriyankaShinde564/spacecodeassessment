import React from "react";
import { ListItem, Box } from "@material-ui/core";
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

export default function Theme({ onThemeChange }) {
  const setBlueTheme = () => {
    const blueTheme = createMuiTheme({
      palette: {
        primary: blue,
      },
    });
    onThemeChange(blueTheme);
  };
  const setPurpleTheme = () => {
    const purpleTheme = createMuiTheme({
      palette: {
        primary: purple,
      },
    });

    onThemeChange(purpleTheme);
  };
  const setGreenTheme = () => {
    console.log("green");
    const greenTheme = createMuiTheme({
      palette: {
        primary: green,
      },
    });
    onThemeChange(greenTheme);
  };

  const setRedTheme = () => {
    const redTheme = createMuiTheme({
      palette: {
        primary: red,
      },
    });
    onThemeChange(redTheme);
  };
  const setYellowTheme = () => {
    const yellowTheme = createMuiTheme({
      palette: {
        primary: yellow,
      },
    });
    onThemeChange(yellowTheme);
  };
  const setCyanTheme = () => {
    const cyanTheme = createMuiTheme({
      palette: {
        primary: cyan,
      },
    });
    onThemeChange(cyanTheme);
  };
  const setLightBlueTheme = () => {
    const lightBlueTheme = createMuiTheme({
      palette: {
        primary: lightBlue,
      },
    });
    onThemeChange(lightBlueTheme);
  };
  const setTealTheme = () => {
    const tealTheme = createMuiTheme({
      palette: {
        primary: teal,
      },
    });
    onThemeChange(tealTheme);
  };
  const setLightGreenTheme = () => {
    const lightGreenTheme = createMuiTheme({
      palette: {
        primary: lightGreen,
      },
    });
    onThemeChange(lightGreenTheme);
  };
  return (
    <div>
      <ListItem>
        <Box bgcolor="blue" m={0.5} p={2} onClick={setBlueTheme}></Box>
        <Box bgcolor="purple" m={0.5} p={2} onClick={setPurpleTheme}></Box>
        <Box bgcolor="green" m={0.5} p={2} onClick={setGreenTheme}></Box>
      </ListItem>
      <ListItem>
        <Box bgcolor="red" m={0.5} p={2} onClick={setRedTheme}></Box>
        <Box bgcolor="yellow" m={0.5} p={2} onClick={setYellowTheme}></Box>
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
    </div>
  );
}
