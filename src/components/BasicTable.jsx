import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  Box,
  Grid,
  Menu,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import Search from "./Search";

const columns = [
  { id: "AreaName", label: "Area Name", minWidth: 140 },
  { id: "EmployeeName", label: "Employee Name", minWidth: 70 },
  {
    id: "CheckinTime",
    label: "Checkin Time",
    minWidth: 140,
    align: "left",
  },
  {
    id: "SanitizeTime",
    label: "Sanitize Time",
    minWidth: 140,
    align: "left",
  },
  {
    id: "SanitizedStatus",
    label: "Sanitize Status",
    minWidth: 140,
    align: "left",
  },
  {
    id: "CheckoutTime",
    label: "Checkout Time",
    minWidth: 140,
    align: "left",
  },
];

function createData(
  AreaName,
  EmployeeName,
  CheckinTime,
  SanitizeTime,
  SanitizedStatus,
  CheckoutTime
) {
  return {
    AreaName,
    EmployeeName,
    CheckinTime,
    SanitizeTime,
    SanitizedStatus,
    CheckoutTime,
  };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263, "Sanitized", 1324171354),
  createData("China", "CN", 1403500365, 9596961, "Sanitized", 1324171354),
  createData("Italy", "IT", 60483973, 301340, "Sanitized", 1324171354),
  createData(
    "United States",
    "US",
    327167434,
    9833520,
    "Sanitized",
    1324171354
  ),
  createData("Canada", "CA", 37602103, 9984670, "Sanitized", 1324171354),
  createData("Australia", "AU", 25475400, 7692024, "Sanitized", 1324171354),
  createData("Germany", "DE", 83019200, 357578, "Sanitized", 1324171354),
  createData("Ireland", "IE", 4857000, 70273, "Sanitized", 1324171354),
  createData("Mexico", "MX", 126577691, 1972550, "Sanitized", 1324171354),
  createData("Japan", "JP", 126317000, 377973, "Sanitized", 1324171354),
  createData("France", "FR", 67022000, 640679, "Sanitized", 1324171354),
  createData("United Kingdom", "GB", 67545757, 242495, "Sanitized", 1324171354),
  createData("Russia", "RU", 146793744, 17098246, "Sanitized", 1324171354),
  createData("Nigeria", "NG", 200962417, 923768, "Sanitized", 1324171354),
  createData("Brazil", "BR", 210147125, 8515767, "Sanitized", 1324171354),
];

const useStyles = makeStyles({
  root: {
    // width: "75%",
    // margin: "0 auto",
    // marginTop: "20px",
    padding: "40px",
    borderRadius: "15px",
    // boxShadow: "0 20px 26px rgba(54, 53, 53, 0.3)",
  },
  tableShadow: {
    boxShadow: "0 20px 26px rgba(54, 53, 53, 0.3)",
  },

  tableContainer: {
    width: "100%",
    borderRadius: 10,
    maxHeight: 440,
  },
  tableHeader: {
    fontWeight: "bold",
    backgroundColor: "rgba(3,169,244)",
  },
  MuiPopoverpaper: {
    height: "20px",
  },

  listItemText: {
    marginLeft: "-28px",
    fontSize: "13px",
  },
  exportMode: {
    color: "rgb(97,97,97)",
    padding: "5px",
    fontSize: "15px",
    fontWeight: 600,

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
  listItemIcon: () => ({}),
  iconsize: () => ({
    fontSize: "20px",
  }),
  selectDropdown: {
    backgroundColor: "#1b1f38",
    height: "100px",
    width: "50px",
    color: "white",
  },
  menuItem: {
    padding: "3px 5px",
    "&:hover": {
      background: "#3b3f58",
    },
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const style = {
    margin: "10px",
    "& input": {
      padding: "10px",
    },
  };
  return (
    <div className={classes.root}>
      <Grid container style={{ marginLeft: "35%" }}>
        <Grid item xs={1} md={2} sm={2}>
          <Box>
            <ListItem button onClick={handleClick} key="expand">
              <ListItemText
                primary="Export as"
                style={{ marginLeft: "20px", width: "30px" }}
              />
              {<ExpandMore />}
            </ListItem>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ marginLeft: "36px", width: "350px" }}
            >
              <ListItem button className={classes.exportMode} key="pdf">
                <ListItemIcon className={classes.listItemIcon}>
                  <i className={"fa fa-file-pdf-o"} style={{ color: "blue" }} />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="PDF"
                />
              </ListItem>
              <ListItem button className={classes.exportMode} key="csv">
                <ListItemIcon className={classes.listItemIcon}>
                  <i className="fa fa-file-csv" style={{ color: "blue" }} />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="CSV"
                />
              </ListItem>
            </Menu>
          </Box>
        </Grid>

        <Grid item xs={1} md={3}>
          <Search
            placeholder="Search By Employee Name"
            style={style}
            comp="table"
          />
        </Grid>
      </Grid>
      <div className={classes.tableShadow}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    className={classes.tableHeader}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      style={
                        i % 2
                          ? { backgroundColor: "white" }
                          : { backgroundColor: "#f5f5f5" }
                      }
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ backgroundColor: "white" }}
          rowsPerPageOptions={[10, 20, 25, 50, 75, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          SelectProps={{
            inputProps: { "aria-label": "row per page" },
            MenuProps: {
              classes: { paper: classes.selectDropdown },
            },
          }}
          classes={{ manuItem: classes.menuItem }}
        />
      </div>
    </div>
  );
}
