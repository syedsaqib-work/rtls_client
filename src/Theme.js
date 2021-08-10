import { createTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: deepPurple,
  },
  typography: {
    fontFamily:
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ",
  },
});
