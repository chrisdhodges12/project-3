import { createTheme, alpha } from "@mui/material";

const theme = createTheme({
  typography: {
    logo: {
      fontFamily: "Major Mono Display",
      letterSpacing: '1rem',
        fontSize: "1.7rem",
        color: alpha("#fff", 0.87),
    },
    homeHeader: {
        fontFamily: "JetBrains Mono",
    },
    h6: {
        fontFamily: "Nunito",
        color: alpha("#fff", 0.87),
    }
  },
});

export default theme;