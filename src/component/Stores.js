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
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import SimpleDialog from '@mui/material/SimpleDialog';
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import { ButtonGroup } from "@mui/material";
import Select from "@mui/material/Select";


function Stores() {
  const [store, setStore] = useState([]);
  const [filter_data, setFilter] = useState("");

  
  //Get Store----------------------------------------------------------||--------------------------------------------

  useEffect(() => {
    //let token = request.get(token);
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };

    console.log(options);
    function getStores(
      store_id = 1,
      page = 1,
      filter_data = "",
      per_page = ""
    ) {
      try {
        fetch(`http://api.binaryhat.com/stores/${page}?&per_page=${per_page}`, options).then((result) => {
          result.json().then((resp) => {
            console.log(resp.data.items);
            setStore(resp.data.items);
            setSearchapiData(resp.data.items)
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
    getStores();
  }, []);

  //Search Filter------------------------------------------------------||----------------------------------------

  const [searchApiData, setSearchapiData] = useState([]);

  const inp = {
    height: 35,
    width: 200,
    float: "right",
    textIndent: 10,
    border: "none",
    marginRight: 15,
  };
  

  const pageNumber = [];
  const [row, setRow] = useState(1);
  console.log(row);
  const postPerPage = row;
  const [number, setNumber] = useState(1); // No of pages
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = store.slice(firstPost, lastPost);

  for (let i = 1; i <= Math.ceil(store.length / postPerPage); i++) {
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
        onInput={(e) => setFilter(e.target.value)}
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
            <TableCell align="right">store_name</TableCell>
            <TableCell align="right">store_type</TableCell>
            <TableCell align="right">domain</TableCell>
            <TableCell align="right">location_id</TableCell>
            <TableCell align="right">last_sys</TableCell>
            <TableCell align="right">created_at</TableCell>
            <TableCell align="right">updated_at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPost.filter((obj) => {
              if (filter_data === "") {
                return obj;
              } else if (
                obj.store_name?.toLowerCase().includes(filter_data) ||
                obj.location_id?.toString().includes(filter_data) ||
                obj.domain?.toLowerCase().includes(filter_data) || 
                obj.store_type?.toLowerCase().includes(filter_data)
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
                {/* <TableCell component="th" scope="row">
              {obj.id}
            </TableCell> */}
                <TableCell style={{ color: "white" }} align="right">
                  {obj.id}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.store_name}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.store_type}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.domain}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.location_id}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.last_sys}
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
