import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#112240",
      light: "#233554",
    },
    secondary: {
      main: "#F472B6",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "extraLarge" },
          style: { fontSize: 16, padding: "5px 2px", width: "200px" },
        },
      ],
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
