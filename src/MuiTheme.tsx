import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
      contrastText: "#333333",
    },
    secondary: {
      main: "#5558FA",
    },
  },

  typography: {
    fontFamily: "SBSansInterface",

    h1: {
      fontSize: "20px",
      fontWeight: "600",
    },
    body1: {
      fontSize: "14px",
    },
    subtitle1: {
      fontSize: "12px",
    },
  },
});
