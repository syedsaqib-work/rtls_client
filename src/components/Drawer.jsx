import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { ListSubheader } from "@material-ui/core";
import BasicTable from "./BasicTable";
import DenseTable from "./DenseTable";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    border: "none",
    boxShadow: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    // marginTop: "80px",
    overflowY: "auto",
    flexShrink: "0",
    boxShadow: "none",
    border: "none",
    // height: "calc(100%-190px)",
    "&::-webkit-scrollbar": {
      width: "0.5em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",

      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      borderRadius: "12px",
    },
    "&:hover": {
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.2)",
        height: "30%",
        borderRadius: "12px",
      },
    },
    "&::-webkit-scrollbar-track-piece:start": {
      marginTop: "84px",
    },
    "&::-webkit-scrollbar-button:start": {},
  },
  content: {
    flexGrow: 1,
    padding: "12px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: "0",
    borderRadius: "12px",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  list: {
    marginTop: "90px",
    margin: "1em",
  },
  list1: {
    margin: "1em",
  },
  subheader: {
    marginLeft: "-1em",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#212121",
  },
  listitemIcon: {},
  icon: {},
  listText: {
    verticalAlign: "middle",
    borderRadius: "12px",
    marginBottom: "4px",
    paddingLeft: "18px",
    fontSize: "0.875rem",
    // backgroundColor: "red",
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
  navLink: {
    textDecoration: "none",
    color: "#212121",
  },
  active: {
    background: "rgba(3,169,244,0.2)",
    color: "rgb(3,169,244)",
    "& $listItemIcon": {
      "& $iconsize": {
        color: "rgb(3,169,244)",
      },
    },
  },
  listItemIcon: () => ({}),
  iconsize: () => ({
    fontSize: "20px",
  }),
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNestedClick = () => {
    setOpen1(!open1);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List className={classes.list}>
          <ListSubheader className={classes.subheader}>
            Sanitizer Compilant Report
          </ListSubheader>
          {["Statistics", "Live Report"].map((text, index) => (
            <NavLink
              activeClassName={classes.active}
              className={classes.navLink}
              to={"/dashboard/" + text.toLowerCase().replace(/ /g, "")}
              key={text}
            >
              <ListItem button className={classes.listText}>
                <ListItemIcon className={classes.listItemIcon}>
                  {index % 2 === 0 ? (
                    <InboxIcon className={classes.iconsize} />
                  ) : (
                    <MailIcon className={classes.iconsize} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} style={{ marginLeft: "-20px" }} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider style={{ margin: "0 1em" }} />
        <List className={classes.list1}>
          <ListSubheader className={classes.subheader}>Widget</ListSubheader>
          {["Widget", "Data", "Chart"].map((text, index) => (
            <ListItem button key={text} className={classes.listText}>
              <ListItemIcon className={classes.listItemIcon}>
                {index % 2 === 0 ? (
                  <InboxIcon className={classes.iconsize} />
                ) : (
                  <MailIcon className={classes.iconsize} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} style={{ marginLeft: "-20px" }} />
            </ListItem>
          ))}
        </List>
        <Divider style={{ margin: "0 1em" }} />
        <List className={classes.list1}>
          <ListSubheader className={classes.subheader}>
            Application
          </ListSubheader>

          <ListItem
            button
            onClick={handleClick}
            className={classes.listText}
            key="appli"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <InboxIcon className={classes.iconsize} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={open}
            // timeout="1000"
            style={{ transitionDuration: ".5s" }}
            unmountOnExit
          >
            <List component="div" disablePadding className={classes.list1}>
              {["account", "settings", "cards", ["one", "two"]].map(
                (text, index) =>
                  Array.isArray(text) ? (
                    <div>
                      <ListItem
                        button
                        onClick={handleNestedClick}
                        className={classes.listText}
                        key={text}
                      >
                        <ListItemIcon className={classes.listItemIcon}>
                          <InboxIcon className={classes.iconsize} />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse
                        in={open1}
                        timeout="1000"
                        style={{ transitionDuration: ".5s" }}
                        unmountOnExit
                      >
                        <List
                          component="div"
                          disablePadding
                          className={classes.list1}
                        >
                          {["one", "two"].map((tx) => (
                            <ListItem
                              button
                              className={classes.listText}
                              key={tx}
                            >
                              <ListItemIcon className={classes.listItemIcon}>
                                <StarBorder className={classes.iconsize} />
                              </ListItemIcon>
                              <ListItemText primary={tx} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  ) : (
                    <ListItem button className={classes.listText} key={text}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <StarBorder className={classes.iconsize} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
              )}
            </List>
          </Collapse>
        </List>
        <Divider style={{ margin: "0 1em" }} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.open,
        })}
        style={{
          background: "rgba(3,169,244,0.2)",
          marginTop: "84px",
          marginRight: "1%",
          height: "100vh",
          marginLeft: `${!props.open ? `${15 - drawerWidth}px` : ""}`,
        }}
      >
        <Switch>
          <Route path="/dashboard/statistics" component={BasicTable} />
          <Route path="/dashboard/livereport" component={DenseTable} />
        </Switch>
      </main>
    </div>
  );
}
