import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, FormControl } from "@material-ui/core";
import rtsl from "../Static/Images/rtsl1.svg";
import rtsl1 from "../Static/Images/anfas-logo.png";

const useStyles = makeStyles((theme) => ({
  check: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  root: {
    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "200px 0 200px",
    zindex: 1,
  },
  img: {
    backgroundImage: `url(${rtsl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    position: "relative",
    borderRadius: "15px",
    margin: "10% 20% 10% 20%",
    padding: "3% 5% 5% 5%",
    backgroundImage: "linear-gradient(to right, #FFFFFF, #FFEFBA)",
  },
  underline: {
    color:
      "linear-gradient( 67.2deg,  rgba(37,208,199,1) -7.5%, rgba(165,90,240,1) 62.7% )",
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
  text: {
    color: "rgb(158,158,158)",
    padding: "3px",
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
    marginTop: "7px",
    color: "#0000ee",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor:
        "linear-gradient( 67.2deg,  rgba(37,208,199,1) -7.5%, rgba(165,90,240,1) 62.7% )",
    },
  },
  box1: {
    display: "flex",
    marginTop: "10px",
  },
  link1: {
    paddingTop: "12px",
    marginLeft: "auto",
    cursor: "pointer",
    order: 2,
  },
  "@keyframes fadeIn": {
    "0%,100%": {
      transform: "translateY(5rem)",
    },
    "50%": {
      transform: "translateY(0)",
    },
  },
  selector: {
    animation: "$fadeIn 20s ease infinite",
    marginLeft: "25%",
    position: "relative",
    height: "auto",
    width: "auto",
    alignItems: "center",
    marginTop: "8%",
  },
  inpt: {
    margin: "8px 0",
  },
  projectDiv: {
    animation: "$fadeIn 20s ease infinite",
    textAlign: "center",
    color: "#83764c",
  },
  productMoto: {
    color: "#83764c",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.img}>
        <div className={classes.selector}>
          <img src={rtsl1} alt="anfas-logo" />
        </div>
        <div className={classes.projectDiv}>
          <Typography variant="h4">
            Smart Hand Sanitizer Monitoring System
          </Typography>
          <Typography variant="h5" className={classes.productMoto}>
            For Clean Hands, Safe Hands
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={8} md={6} square className={classes.color}>
        <div
          className={classes.paper}
          component={Paper}
          elevation={6}
          square
          style={{
            boxShadow: "0 20px 26px rgba(54, 53, 53, 0.3)",
            backgroundColor: "white",
          }}
        >
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Hi, Welcome Back!
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Enter Your Crenditials to Continue
          </Typography>
          <form className={classes.form} noValidate>
            <FormControl fullWidth className={classes.inpt}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                color="secondary"
                type="email"
              />
            </FormControl>

            <FormControl fullWidth className={classes.inpt}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                color="secondary"
                type="password"
              />
            </FormControl>

            <Box className={classes.box1}>
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
              />

              <Typography
                variant="body2"
                color="secondary"
                className={classes.link1}
              >
                Forget Password?
              </Typography>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>

            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
          <Divider
            variant="middle"
            color="secondary"
            light
            style={{ color: "grey", width: "100%" }}
          />
          <Link className={classes.link} variant="body1" color="primary">
            Don't have an account?
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}
