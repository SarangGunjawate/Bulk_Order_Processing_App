import { Drawer } from '@material-ui/core'
import { IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const pages = ['Home', 'Signup', 'Login', 'Users', 'Store', 'Customers', 'Products','Uploads', 'Logout']

  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List sx={{width: 300, textIndent: 20}}>
                {
                    pages.map((page, index)=>(
                <ListItemButton sx={{height: 60}}>
                    <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                        </ListItemIcon>

                </ListItemButton>
                    ))
                }
                
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{color: 'white', marginLeft: 'auto'}}> 
            <MenuIcon />
        </IconButton>
    </React.Fragment> 
  )
}

export default DrawerComponent