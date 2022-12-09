import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111430",
      yellow: "#FBD062",
      green: "#7AB259",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
});
export default theme;
