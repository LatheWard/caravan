import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#003049", // prussian blue
      contrastText: "#fff9ec", // floral white
    },
    secondary: {
      main: "#669bbc", // air superiority blue
    },
    error: {
      main: "#c1121f", // fire brick
    },
    warning: {
      main: "#780000", // barn red
    },
    background: {
      default: "#fff9ec", // floral white
      paper: "#ffffff",
    },
    text: {
      primary: "#003049",
      secondary: "#669bbc",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: { fontSize: "2.25rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    body1: { fontSize: "1rem" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fff9ec",
          color: "#003049",
        },
      },
    },
  },
});

export default theme;
