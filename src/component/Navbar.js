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

function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const pages = ['Home', 'Signup', 'Login', 'Users', 'Store', 'Customers', 'Products','Uploads']

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "#1A202C", height: 80, paddingTop: 1.5 }}>
        <Toolbar>
        <Typography>Bulk Order Processing App</Typography>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                aria-label="basic tabs example"
                value={value}
                onChange={(event, value) => setValue(value)}
                indicatorColor="secondary"
                textColor="inherit"
              >
                {
                    pages.map((page, index)=>(
                        <Tab key={index} label={page} />
                    ))
                }
              </Tabs>
              <Button variant="contained" sx={{ marginLeft: "auto" }}>
                Signup
              </Button>
              <Button variant="contained" sx={{ marginLeft: "10px" }}>
                Login
              </Button>
            </>
          )}
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
