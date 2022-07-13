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
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import Home from './Home'
import Users from './Users'
import Stores from './Stores'
import Customers from './Customers'
import Products from './Product'
import Upload from './Upload'
import {Link} from 'react-router-dom'

function Navbar() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const pages = [
    "Home",
    "Signup",
    "Login",
    "Users",
    "Store",
    "Customers",
    "Products",
    "Upload",
    "Logout"
  ];

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "#364153", height: 80, paddingTop: 1.5 }} position="static">
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
              sx={{marginLeft: 3}}
                aria-label="basic tabs example"
                value={value}
                onChange={(event, value) => setValue(value)}
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab label="Home"/>
                <Tab label="Users" />
                <Tab label="Store" />
                <Tab label="Customers" />
                <Tab label="Products" />
                <Tab label="Upload" />
                <Tab label="Logout" />
                
              </Tabs>
              
              {/* <Tabs value={value1} onChange={(event, value) => setValue1(value)} sx={{ marginLeft: "auto" }}>
              <Tab label='SignUp' />
                  <Tab label='Login' sx={{ marginLeft: "10px", backgroundColor: 'gray' }}/>
              </Tabs> */}

                

              <Button component={Link} to='/SignUp' variant="contained" sx={{ marginLeft: "auto" }}>
                Signup
              </Button>
              <Button component={Link} to='/Login' variant="contained" sx={{ marginLeft: "10px" }}>
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {value === 0 && <Home/>}
      {value === 1 && <Users/>}
      {value === 2 && <Stores/>}
      {value === 3 && <Customers/>}
      {value === 4 && <Products/>}
      {value === 5 && <Upload/>}
      {/* {value === 6 && <SignUp/>}
      {value === 7 && <Login/>} */}


    </React.Fragment>
  );
}

export default Navbar;
