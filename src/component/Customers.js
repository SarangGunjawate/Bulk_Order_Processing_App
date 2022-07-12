import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import "./Users.css";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { ButtonGroup, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
//import SimpleDialog from '@mui/material/SimpleDialog';
import Modal from "@mui/material/Modal";
import Pagination from "@mui/material/Pagination";
import MenuItem from "@mui/material/MenuItem";
import TablePagination from "@mui/material/TablePagination";
//import Pagination from "react-js-pagination";

function Stores() {
  const [customer, setCustomer] = useState([]);
  const [filter_data, setFilter] = useState("");

  useEffect(() => {
    //let token = request.get(token);
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };

    //console.log(options);
    function getCustomer(
      store_id = 1,
      page = 1,
      filter_data = "",
      per_page = ""
    ) {
      // console.log(store_id=1,page=1,filter_data, per_page=10)
      try {
        fetch(
          `http://api.binaryhat.com/customers/${store_id}/${page}?&per_page=${per_page}`,
          options
        ).then((result) => {
          result.json().then((resp) => {
            console.log(per_page);
            //console.log(resp.data.items);
            setCustomer(resp.data.items);
            setSearchapiData(resp.data.items);
            // console.log("count:", resp.data.items.length);

            // //id sorting one by one-----------------------------------------------||--------------------------------------
            // resp.data.users.sort((a, b) => a.id - b.id);
            // setFullname(resp.data.users[0].fullname);
            // //console.log("fname is: ",fullname)
            // setUsername(resp.data.users[0].username);
            // setUserId(resp.data.users[0].id);
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
    getCustomer();
  }, []);

  const [searchApiData, setSearchapiData] = useState([]);

  const inp = {
    height: 35,
    width: 200,
    float: "right",
    textIndent: 10,
    border: "none",
    marginRight: 15,
  };

  //Pagination ----------------------------------------------||-----------------------------------

  const pageNumber = [];
  const [row, setRow] = useState(5);
  console.log(row);
  const postPerPage = row;
  const [number, setNumber] = useState(1); // No of pages
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = customer.slice(firstPost, lastPost);

  for (let i = 1; i <= Math.ceil(customer.length / postPerPage); i++) {
    pageNumber.push(i);
    // console.log("no of pages", pageNumber);
    // console.log(customer.length)
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);

    console.log(pageNumber);
  };

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "#1A202C" }}>
      <input
        style={inp}
        type="text"
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        //style={{ color: "white" }}
      >
        <TableHead>
          <TableRow
            className="setCss"
            style={{ backgroundColor: "#344869", height: 75 }}
          >
            <TableCell align="right">id</TableCell>
            <TableCell align="right">shopify_id</TableCell>
            <TableCell align="right">shopify_email</TableCell>
            <TableCell align="right">shopify_first_name</TableCell>
            <TableCell align="right">shopify_last_name</TableCell>
            <TableCell align="right">shopify_verified_email</TableCell>
            <TableCell align="right">shopify_phone</TableCell>
            <TableCell align="right">created_at</TableCell>
            <TableCell align="right">updated_at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPost
            .filter((obj) => {
              if (filter_data === "") {
                return obj;
              } else if (
                obj.shopify_first_name?.toLowerCase().includes(filter_data) ||
                obj.shopify_last_name?.toLowerCase().includes(filter_data) ||
                obj.shopify_email?.toLowerCase().includes(filter_data) ||
                obj.shopify_id?.toString().includes(filter_data)
              ) {
                return obj;
              }
            })
            .map((obj, i) => {
              return (
                <TableRow
                  style={{ color: "red" }}
                  key={obj.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.id}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.shopify_id}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.shopify_email}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.shopify_first_name}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.shopify_last_name}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.shopify_verified_email}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.shopify_phone}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.created_at}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {obj.updated_at}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      {/* Pagination-----------------------------------------------------||------------------------------------- */}

      <ButtonGroup
        style={{ display: "flex", justifyContent: "center" }}
        color="primary"
        variant="outlined"
      >
        <Select
          // style={{ width: 100, height: 40 }}
          // value={row}
          onChange={(e) => setRow(e.target.value)}
        >
          
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>

        <Button
          onClick={() => setNumber(number - 1)}
          disabled={`${number === 1 ? "disabled" : ""}`}
        >
          Previous
        </Button>

        {pageNumber.map((Elem) => {
          return (
            <>
              <Button onClick={(e) => ChangePage(Elem)}>{Elem}</Button>
            </>
          );
        })}
        <Button
          onClick={() => setNumber(number + 1)}
          disabled={`${number === pageNumber.length ? "disabled" : ""}`}
        >
          Next
        </Button>
      </ButtonGroup>
    </TableContainer>
  );
}

export default Stores;
