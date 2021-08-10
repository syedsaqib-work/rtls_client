import React from "react";
import Box from "@material-ui/core/Box";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchTable: {
    width: "300px",
    borderRadius: "12px",
    "& input": {
      marginLeft: "10px",
      padding: "10px",
    },
  },
  searchNav: {
    width: "320px",
    borderRadius: "12px",
    "& input": {
      marginLeft: "10px",
    },
  },
});

export default function Search(props) {
  const classes = useStyles();
  return (
    <Box>
      <OutlinedInput
        fullWidth
        placeholder={props.placeholder}
        className={
          props.comp === "table" ? classes.searchTable : classes.searchNav
        }
        style={props.style}
        startAdornment={
          <SearchIcon
            style={{
              fontSize: "18px",
              color: "grey",
              fontWeight: "lighter",
            }}
          />
        }
      />
    </Box>
  );
}
