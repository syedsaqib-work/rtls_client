import React, { useRef, useEffect } from "react";
import Sidenav from "./Drawer";
import AppBar from "@material-ui/core/AppBar";
import {
  Avatar,
  Box,
  ButtonBase,
  Chip,
  Grow,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../Static/Images/anfas-logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Settings from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "83.3px",
    backgroundColor: "white",
    zIndex: 2000,
  },
  toolbar: {
    padding: "16px",
  },

  img: {
    display: "flex",
  },
  line: {
    lineHeight: "1",
    fontSize: "1.2em",
    color: "red",
  },
  // search: {
  //   marginLeft: "20px",
  // },
  account: {
    color: "rgb(97,97,97)",
    borderRadius: "12px",

    "&:hover": {
      background: "rgba(3,169,244,0.2)",
      color: "rgb(3,169,244)",
      "& $listItemIcon": {
        "& $iconsize": {
          color: "rgb(3,169,244)",
        },
      },
    },
  },
  listItemText: {
    marginLeft: "-15px",
  },
  listItemIcon: () => ({}),
  iconsize: () => ({
    fontSize: "20px",
  }),

  navBtn: {
    borderRadius: "12px",
    height: "40px",
    width: "40px",
    margin: "auto",
    background: "rgba(3,169,244,0.2)",
    color: "rgb(3,169,244)",
    transition: "all .5s ease",
    "&:hover": {
      background: "rgb(3,169,244)",
      color: "rgb(255,255,255,0.9)",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  //   const [value, setValue] = React.useState([null, null]);
  const [none, setNone] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setNone(!none);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNone(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const accRef = useRef(null);
  useOutsideAlerter(accRef);
  const style = {
    marginLeft: "20px",
  };

  return (
    <div>
      <AppBar elevation={0} className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.img}>
            <Box style={{ width: "194px" }}>
              <img
                src={logo}
                style={{ height: "50px", alignContent: "center" }}
                alt="logo"
              />
            </Box>
            <ButtonBase
              size="small"
              className={classes.navBtn}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon style={{ fontSize: "2rem" }} />
            </ButtonBase>
          </div>
          <Search placeholder="Search By Employee" style={style} comp="Nav" />
          <Chip
            style={{
              padding: "8px",
              height: "48px",
              marginLeft: "auto",
              borderRadius: "27px",
              borderColor: "rgba(33,150,234,0.2)",
              background: "rgba(33,150,234,0.2)",
              transition: "all 1s ease-in-out",
            }}
            avatar={
              <Avatar
                style={{
                  height: "34px",
                  width: "34px",
                  margin: "8px 0 8px 4px",
                }}
              >
                M
              </Avatar>
            }
            clickable
            label={
              <Settings
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  background: "transparent !important",
                  margin: "13px -4px 8px 0px",
                }}
                color="primary"
              />
            }
            variant="outlined"
            onClick={handleClick}
            ref={accRef}
          />
        </Toolbar>
        <div
          style={{
            position: "absolute",
            transform: "translate(1100px,88px)",
            width: "20%",
            display: `${!none ? "none" : "block"}`,
          }}
        >
          <Grow in={none} timeout={(500, 700)}>
            <Paper
              elevation={4}
              style={{ borderRadius: "12px", padding: "12px" }}
            >
              <Typography variant="body1" style={{ padding: "5px" }}>
                Good Morning, Waseem.
              </Typography>
              <Divider />
              <List component="nav" aria-label="account settings">
                <ListItem button className={classes.account}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <Settings className={classes.iconsize} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Account Settings"
                    className={classes.listItemText}
                  />
                </ListItem>
                <ListItem button className={classes.account}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <ExitToAppRoundedIcon className={classes.iconsize} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Logout"
                    className={classes.listItemText}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grow>
        </div>
      </AppBar>
      <Sidenav open={open} />
    </div>
  );
};

export default NavBar;
