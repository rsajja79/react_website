// Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, IconButton, Divider, Typography, Box, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SchoolIcon from '@mui/icons-material/School'; // Placeholder icon for the logo

const drawerWidth = 240;
const closedWidth = 56; // Width of the closed drawer to show only icons

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : closedWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : closedWidth,
          boxSizing: 'border-box',
          transition: (theme) => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
          }),
          overflowX: 'hidden',
        },
      }}
      variant="permanent"
      anchor="left"
      open={open}
    >
      <Box
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 8px', 
          ...(!open && { justifyContent: 'center' })
        }}
        role="presentation"
      >
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        {open && (
          <>
            <SchoolIcon sx={{ marginRight: '8px' }} /> {/* Temporary logo/icon */}
            <Typography variant="h6" noWrap component="div">
              VirtualTA
            </Typography>
          </>
        )}
      </Box>
      <Divider />
      <List>
        <ListItem button key="Dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button key="Settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Settings" />}
        </ListItem>
      </List>
    </Drawer>
  );
}
