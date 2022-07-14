import { Drawer } from "@material-ui/core";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LockIcon from "@mui/icons-material/Lock";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const pages = [
    "Home",
    "Signup",
    "Login",
    "Users",
    "Store",
    "Customers",
    "Products",
    "Uploads",
    "Logout",
  ];
  const listitemtxt = {
    color: "white",
    fontFamily: '"Yellowtail", cursive',
  };

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("resresh_token");
    navigate("/Login");
  };

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ backgroundColor: "#1A202C", height: "100vh" }}>
          <List sx={{ width: 300, textIndent: 20 }}>
            <ListItemButton sx={{ height: 60, color: "white" }}>
              <ListItemIcon>
                <ListItemText style={listitemtxt}>
                  <PersonAddIcon />
                  Signup
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ height: 60 }}>
              <ListItemIcon>
                <ListItemText style={listitemtxt}>
                  <LockOpenIcon />
                  Login
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ height: 60 }}>
              <ListItemIcon>
                <ListItemText style={listitemtxt}>
                  <PersonIcon />
                  Users
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ height: 60 }}>
              <ListItemIcon>
                <ListItemText style={listitemtxt}>
                  <LocalGroceryStoreIcon />
                  Store
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ height: 60 }}>
              <ListItemIcon>
                <ListItemText style={listitemtxt}>
                  <ArrowForwardIosIcon />
                  Customers
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ height: 60 }}>
              <ListItemIcon>
                <ListItemText style={listitemtxt}>
                  <ArrowForwardIosIcon />
                  Products
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ height: 60 }}>
              <ListItemIcon>
                <ListItemText style={listitemtxt}>
                  <FileUploadIcon />
                  Uploads
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ height: 60 }}>
              <ListItemIcon>
                <ListItemText onClick={logout} style={listitemtxt}>
                  <LockIcon />
                  Logout
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: "white", marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComponent;
