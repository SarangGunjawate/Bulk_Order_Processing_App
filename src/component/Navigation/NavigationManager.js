import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import CategoryVG from "../SVG/Category";
import ChartSVG from "../SVG/ChartSVG"
import TicketSVG from '../SVG/Ticket'
import DocumentSVG from '../SVG/Document'
import CalendarSVG from '../SVG/Calendar'
import ActivitySVG from '../SVG/Activity'
import NotificationSVG from '../SVG/Notification'
import SettingsSVG from '../SVG/Settings'
import MuiDrawer from '@mui/material/Drawer';
import LogoutIcon from '@mui/icons-material/Logout';
import {logout} from '../Utils/Helper'



import { useNavigate, Outlet, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';

const drawerWidth = 240;

const DRAWER_ITEMS = [
  {
    title: 'Dashboard',
    icon: (iconColor) => <CategoryVG color={iconColor} />,
    route: '/',
  },
  {
    title: 'Analytics',
    icon: (iconColor) => <ChartSVG color={iconColor} />,
    route: '/',
  },
  {
    title: 'Stores',
    icon: (iconColor) => <TicketSVG color={iconColor} />,
    route: '/',
  },
  {
    title: 'Orders',
    icon: (iconColor) => <DocumentSVG color={iconColor} />,
    route: '/',
  },
  {
    title: 'Invoices',
    icon: (iconColor) => <CalendarSVG color={iconColor} />,
    route: '/',
  },
  {
    title: 'Product Search',
    icon: (iconColor) => <ActivitySVG color={iconColor} />,
    route: '/',
  },
  {
    title: 'Customers',
    icon: (iconColor) => <NotificationSVG color={iconColor} />,
    route: '/Customers',
  },
  {
    title: 'Addresses',
    icon: (iconColor) => <SettingsSVG color={iconColor} />,
    route: '/',
  },
  {
    title: 'Settings',
    icon: (iconColor) => <SettingsSVG color={iconColor} />,
    route: '/',
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerFooter = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,

  ...(open && {
    flexDirection: 'row',
  }),
  ...(!open && {
    flexDirection: 'column',
  }),
}));


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));


export default function NavigationManager() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const theme = useTheme();
//   const dispatch = useDispatch();


  const handleDrawertoggal = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index, drawerItem) => {
    // setSelectedListItemIndex(index);
    navigate(drawerItem.route);
  };
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Box sx={{backgroundColor: '#364153', height: '100vh'}}>
        <DrawerHeader
            sx={{
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={handleDrawertoggal}
          >
            <Typography
              sx={{
                width: '100%',
                textAlign: 'center',
                py: '2.5rem',
                // fontWeight: 700,
                color: 'white',
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontSize: '22.78px'
              }}
            >
              {open ? 'Bulk Order' : 'BO'}
            </Typography>
          </DrawerHeader>
          <List>
            {DRAWER_ITEMS.map((item, index) => (
              <ListItem
                key={item.title}
                sx={{ display: 'block', py: 0, px: 0 }}
                onClick={() => handleListItemClick(index, item)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                      '& .MuiSvgIcon-root': {
                        width: '1.5rem',
                        height: '1.5rem',
                      },
                    }}
                  >
                    {item.icon(
                        location.pathname.split('/')[1] ===
                        item.route.split('/')[1]
                        ? theme.palette.primary.main
                        : theme.palette.primary.contrastText
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                          color: '#868D98'
                    }}
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
                {/* </Link> */}
              </ListItem>
            ))}
          </List>
          <DrawerFooter open={open} sx={{marginTop: '100px'}}>
          <Avatar alt='avatar image' 
          // src={user?.image} 
          />
          {open && <Box component={'span'}>
            {/* {user.username} */}
            </Box>}
          {open && (
            <IconButton
            title='Logout User'
              onClick={() => {
                logout();
                window.location = '/Login';
              }}
            >
              <LogoutIcon sx={{ width: '1.5rem', height: '1.5rem' }} />
            </IconButton>
          )}
        </DrawerFooter>
          <Outlet />
        </Box>
      </Drawer>
      <Box
        component='main'
        sx={{
          marginLeft: open ? `${drawerWidth}px` : `65px`,
          width: `calc(100% - ${open ? `${drawerWidth}px` : `65px`})`,
          height: '100vh',
          backgroundColor: '#1A202C',
        }}
      ></Box>
    </>
  );
}