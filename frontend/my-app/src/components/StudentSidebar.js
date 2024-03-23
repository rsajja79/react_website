// StudentSidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, IconButton, Divider, Typography, Box, ListItemText } from '@mui/material';
import NotesIcon from '@mui/icons-material/Notes';
import ChatIcon from '@mui/icons-material/Chat';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MenuIcon from '@mui/icons-material/Menu'; // Added for the collapsible function
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Added for the collapsible function
import SchoolIcon from '@mui/icons-material/School'; // Placeholder icon for the logo

const drawerWidth = 240;
const closedWidth = 56; // Width of the closed drawer to show only icons

export default function StudentSidebar({ selectContent }) {
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
          backgroundColor: '#121212', // Match the color to the theme background
          color: '#fff',
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
          ...(!open && { justifyContent: 'center' }),
          backgroundColor: '#1d1d1d',
        }}
        role="presentation"
      >
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        {open && (
          <>
            <SchoolIcon sx={{ marginRight: '8px' }} /> {/* Logo/icon */}
            <Typography variant="h6" noWrap component="div">
              VirtualTA
            </Typography>
          </>
        )}
      </Box>
      <Divider />
      <List>
        <ListItem button key="Notes">
          <ListItemIcon>
            <NotesIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>
        <ListItem button key="Chat Bot">
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Chat Bot" />
        </ListItem>
        <ListItem button key="Flashcards" onClick={() => selectContent('flashcards')}>
          <ListItemIcon>
            <CollectionsBookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Flashcards" />
        </ListItem>
        <ListItem button key="Quiz">
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText primary="Quiz" />
        </ListItem>
        <ListItem button key="Transcript">
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Transcript" />
        </ListItem>
        <ListItem button key="Settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button key="Upgrade to Premium">
          <ListItemIcon>
            <StarBorderIcon />
          </ListItemIcon>
          <ListItemText primary="Upgrade to Premium" />
        </ListItem>
      </List>
    </Drawer>
  );
}
