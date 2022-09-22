import React from "react";
// import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import {
  Menu,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles, alpha } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: theme.spacing(0.5),
    mx: theme.spacing(2),
    background:
      "linear-gradient(180deg, rgba(33, 99, 0, 0.588) 0%, rgba(63, 125, 32, 0.532) 100%)",
    backgroundBlendMode: "darken",
    boxShadow: theme.shadows[6],
    // box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    letterSpacing: "0.2rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    menuButton: {
      display: "none",
    },
  },
}));

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <AppBar color="transparent" className={classes.appbar} position="static">
      <Toolbar color="none">
        <Typography
          className={classes.logoLg}
          variant="logo"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Resume Builder
        </Typography>
        <Typography
          className={classes.logoSm}
          variant="logo"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          RB
        </Typography>
        <Button
          color="error"
          className={classes.menuButton}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon
            sx={{
              color: alpha("#fff", 0.85),
              fontSize: "2rem",
            }}
          />
        </Button>

        {Auth.loggedIn() ? (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <NavLink to="/">
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </NavLink>
            {/* <NavLink to="/dashboard">
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          </NavLink> */}
            <NavLink to="/design">
              <MenuItem onClick={handleClose}>Resume Templates</MenuItem>
            </NavLink>
            <NavLink to="/">
              <MenuItem onClick={handleClose && logout}>Logout</MenuItem>
            </NavLink>
          </Menu>
        ) : (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <NavLink to="/login">
              <MenuItem>Login</MenuItem>
            </NavLink>
            <NavLink to="/register">
              <MenuItem>Signup</MenuItem>
            </NavLink>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
