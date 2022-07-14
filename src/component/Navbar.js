import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import DrawerComponent from "./DrawerComponent";
import Home from "./Home";
import Users from "./Users";
import Stores from "./Stores";
import Customers from "./Customers";
import Products from "./Product";
import Upload from "./Upload";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const EnaDec = localStorage.getItem("access_token");
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  // const pages = [
  //   "Home",
  //   "Signup",
  //   "Login",
  //   "Users",
  //   "Store",
  //   "Customers",
  //   "Products",
  //   "Upload",
  //   "Logout"
  // ];


  useEffect(() => {

    if(localStorage.getItem('access_token')){
      navigate('/Navbar')
    }
    else{
      navigate('/Login')
    }
  }, [])

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("resresh_token");
    navigate("/Login");
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{ backgroundColor: "#364153", height: 80, paddingTop: 1.5 }}
        position="static"
      >
        <Toolbar>
          <Typography sx={{ fontSize: "23px" }}>
            Bulk Order Processing App
          </Typography>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 3 }}
                aria-label="basic tabs example"
                value={value}
                onChange={(event, value) => setValue(value)}
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab label="Home" />
                <Tab disabled={!EnaDec} label="Users" />
                <Tab disabled={!EnaDec} label="Store" />
                <Tab disabled={!EnaDec} label="Customers" />
                <Tab disabled={!EnaDec} label="Products" />
                <Tab disabled={!EnaDec} label="Upload" />
              </Tabs>

              <Button
                component={Link}
                to="/SignUp"
                variant="contained"
                sx={{ marginLeft: "auto" }}
              >
                Signup
              </Button>

              {/* -------------------------------Login Logout remove functionality---------------------------------- */}

              {localStorage.getItem("access_token") ? (
                <Button
                  onClick={logout}
                  variant="contained"
                  sx={{ marginLeft: "10px" }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  component={Link}
                  to="/Login"
                  variant="contained"
                  sx={{ marginLeft: "10px" }}
                >
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      {value === 0 && <Home />}
      {value === 1 && <Users />}
      {value === 2 && <Stores />}
      {value === 3 && <Customers />}
      {value === 4 && <Products />}
      {value === 5 && <Upload />}
      {/* {value === 6 && <SignUp/>}
      {value === 7 && <Login/>} */}
    </React.Fragment>
  );
}

export default Navbar;
