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
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
//import SimpleDialog from '@mui/material/SimpleDialog';
import Modal from "@mui/material/Modal";

import './Users.css'
import Navbar from "./Navbar";

export default function BasicTable(props) {

  const mystyle2 = { textAlign: "center", paddingTop: 40, color: "black"};


  const inp = {
    height: 35,
    width: 200,
    float: "right",
    textIndent: 10,
    border: "none",
    marginRight: 15,
  };
  const [user, setUser] = useState([]);
  // console.log('uuuuuuuuuuuu',user)
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);
  // const [success, setSuccess] = useState("");
  // const [regErr, setRegErr] = useState("");

  //Search Data---------------------------------------------||------------------------------------------------

  const [searchApiData, setSearchapiData] = useState([]);
  const [filterDT, setFilter] = useState("");
  

  function handleSearch(e) {
    if (e.target.value === "") {
      setUser(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (obj) =>
          obj.fullname.toLowerCase().includes(e.target.value.toLowerCase()) ||
          obj.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
          obj.roles.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setUser(filterResult);
      } else {
        setUser([{ fullname: "No data" }]);
      }
    }
    setFilter(e.target.value);
  }

  console.log("data: ", user);

  //Print user asc-----------------------------||----------------------------------

  // const numAscending = [...user].sort((a, b) => a.id - b.id);
  // console.log("accending....", numAscending);

  //Get_User_Call ----------------------------------------||------------------------------------------

  useEffect(() => {
    
    if(localStorage.getItem('access_token')){
      // navigate('/Users')
    }
    else{
      navigate('/Login')
    }

    //let token = request.get(token);
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };

    console.log(options);
    function getAllStudents() {
      try {
        fetch("http://api.binaryhat.com/users", options).then((result) => {
          result.json().then((resp) => {
            setUser(resp.data.users);
            setSearchapiData(resp.data.users);

            //id sorting one by one-----------------------------------------------||--------------------------------------
            resp.data.users.sort((a, b) => a.id - b.id);
            setFullname(resp.data.users[0].fullname);
            //console.log("fname is: ",fullname)
            setUsername(resp.data.users[0].username);
            setUserId(resp.data.users[0].id);
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudents();
  }, []);

  //Delete_Call_api-----------------------------------------------||-----------------------------------

  const handleRemove = (id, e) => {
    fetch(`http://api.binaryhat.com/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
      console.log("User_id: ", id);
      alert("User Delete Successfully");
      window.location.reload();
    });
  };

  //Update User----------------------------------------------------||----------------------------------------------------

  const textfildstyle = {
    backgroundColor: '#92a8d1'
  }

  const styleupdate = {
    position: "absolute",
    //textAlign: 'center',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 350,
    //bgcolor: "white",
    backgroundColor: 'white',
    border: "none",
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };

  const [open1, setOpen1] = useState(false);

  const handleClose1 = () => setOpen1(false);

  const selectUser = (id) => {
    //console.log(id);
    setOpen1(true);
    let item = user.filter(update => update.id == id)
    console.log('aaaaaaaaaaaaa',item);
    setFullname(item[0].fullname);
    setUsername(item[0].username);
    // setUserId(item.id);

    // //console.log(user);
    // console.warn('selected user: ', user[id - 1]);

    // // setFullname(user[id - 1].fullname);
    // // setUsername(user[id - 1].username);
  };

  function updateUser(e) {
    e.preventDefault();
    let item = { fullname, username, userId };
    console.warn("item", item);
    fetch(`http://api.binaryhat.com/users/${userId}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        alert('User Updated Successfully....!')
      });
    });
  }


  const style = {  //View User--------------------------------------------------------||----------------------------------------------

    position: "absolute",
    //textAlign: 'center',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };

  const style1 = {
    marginLeft: 150,
    marginTop: 50,
  };
  const style2 = {
    lineHeight: 2,
  };

  const [phone, setPhoneno] = useState("");
  const [uImage, setUimage] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [UpdatedAt, setUpdatedAt] = useState("");
  const [roles, setRoles] = useState("");
  const [open, setOpen] = useState(false);
  
  const handleOpen = (id) => {
    let item = user.filter(userView => userView.id == id)
    console.log('aaaaaaaaaaaaa',item);
    setOpen(true);
    
    setFullname(item[0].fullname);
    setUsername(item[0].username);
    setPhoneno(item[0].phone_number);
    setUimage(item[0].user_image);
    setCreatedAt(item[0].created_at);
    setUpdatedAt(item[0].updated_at);
    setRoles(item[0].roles);
    setUserId(item[0].id);
  };
  const handleClose = () => setOpen(false);

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "#1A202C" }}>
      <input
        style={inp}
        type="text"
        placeholder="Search"
        value={filterDT}
        onInput={(e) => handleSearch(e)}

      />
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        //style={{ color: "white" }}
      >
        <TableHead>
          <TableRow
            className="setCss"
            style={{ backgroundColor: "#344869" }}
          >
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Full_Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">UserImage</TableCell>
            <TableCell align="right">Created_at</TableCell>
            <TableCell align="right">Updated_at</TableCell>
            <TableCell align="right">Roles</TableCell>
            <TableCell align="right">Delete_User</TableCell>
            <TableCell align="right">Update_User</TableCell>
            <TableCell align="right">View_User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((obj, i) => {
            return (
              <TableRow
                key={obj.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                
                <TableCell style={{ color: "white" }} align="right">
                  {obj.id}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.fullname}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.username}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.phone_number}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                {/* <img src='/img/sarang.jpg' height='60' width='60' /> */}
                <img src={obj.user_image} />
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.created_at}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.updated_at}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  {obj.roles}
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "#094654",
                      height: 35,
                      width: 100,
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemove(obj.id)}
                    type="button"
                  >
                    Delete_User
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "#094654",
                      height: 35,
                      width: 100,
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => selectUser(obj.id)}
                    type="button"
                  >
                    Update_User
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "#094654",
                      height: 35,
                      width: 100,
                      border: "none",
                      cursor: "pointer",
                    }}
                    type="button"
                    // onChange={() => setId()}
                    // onClick={()=> viewUser(obj.id)}
                    onClick={() => handleOpen(obj.id)}
                  >
                    View
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        
      </Table>

      
      <br />
      <Box>
        <div>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleupdate}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="div"
                //component={'span'} variant={'body2'}
                style={{ float: "right" }}
              >
                <Button
                  style={{ color: "black", height: 30 }}
                  onClick={handleClose1}
                >
                  <h1>X</h1>
                </Button>
              </Typography>
              

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Typography>
                  <Box
                    component="form"
                    method="POST"
                    autocomplete="off"
                    sx={{ mt: 1, input: { color: "#FFFFFF" } }}
                  >
                    <h1 style={mystyle2}>Update User</h1>

                    <TextField
                      margin="normal"
                      style={textfildstyle}
                      required
                      value={fullname}
                      fullWidth
                      // id="fullname"
                      // placeholder="Enter fullname"
                      // name="fullname"
                      type="text"
                      autoComplete="fullname"
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                    <br />

                    <TextField
                      margin="normal"
                      required
                      style={textfildstyle}
                      fullWidth
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      value={username}
                      type="text"
                      // name="username"
                      // placeholder="Enter username"
                      // id="username"
                      autoComplete="username"
                    />
                    <br />

                    <Button
                    style={{backgroundColor: '#094654'}}
                      type="button"
                      fullWidth
                      //disabled={!EnaDec}
                      onClick={updateUser}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Update User
                    </Button>
                  </Box>
                </Typography>
              </Typography>
            </Box>
          </Modal>
        </div>
      </Box>
      
      <Box>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ float: "right" }}
              >
                <Button
                  style={{ color: "black", height: 30 }}
                  onClick={handleClose}
                >
                  <h1>X</h1>
                </Button>
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ textAlign: "center" }}
              >
                User View
              </Typography>

              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={style1}
              >
                <Typography style={style2}>
                  <h4>
                    <pre>id:            {userId}</pre>
                  </h4>
                  <h4>
                    <pre>Full Name:     {fullname}</pre>
                  </h4>
                  <h4>
                    <pre>User Name:     {username}</pre>
                  </h4>
                  <h4>
                    <pre>Phone Number:  {phone}</pre>
                  </h4>
                  <h4>
                    <pre>Image:         {uImage}</pre>
                  </h4>
                  <h4>
                    <pre>Created At:    {createdAt}</pre>
                  </h4>
                  <h4>
                    <pre>Updated At:    {UpdatedAt}</pre>
                  </h4>
                  <h4>
                    <pre>Roles:         {roles}</pre>
                  </h4>
                </Typography>
              </Typography>
            </Box>
          </Modal>
        </div>
      </Box>
    </TableContainer>
  );
}
