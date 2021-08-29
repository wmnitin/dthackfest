import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import ViewQr from "./ViewQr/ViewQr";
import CaptureQr from "./CaptureQr";
import { pink } from "@material-ui/core/colors";
import "./App.css";
import {
  AppBar,
  IconButton,
  makeStyles,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Update from "./Update/Update";

const theme = createMuiTheme({
  palette: {
    primary: pink,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              DT Engineering
            </Typography>
            <Button color="inherit" onClick={() => (window.location = "/")}>
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Router>
          <div style={{ margin: "25px" }}>
            <Switch>
              <Route path="/scancode">
                <CaptureQr />
              </Route>
              <Route path="/view">
                <ViewQr />
              </Route>
              <Route path="/update/:id">
                <Update />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
