import React from 'react';
import { 
  Box, 
  Card, 
  CardActionArea, 
  CardContent, 
  Typography, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemButton, 
  IconButton 
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SchoolIcon from '@mui/icons-material/School'; // Placeholder icon for the logo

export default function MainContent() {

  // Customizable Card component for each option
  const OptionCard = ({ icon, title, subtitle, iconColor }) => (
    <Card sx={{ display: 'flex', mb: 2, bgcolor: "background.default" }}>
      <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 2, display: 'flex' }}>
            {React.cloneElement(icon, { sx: { fontSize: 40 }, color: iconColor })}
          </Box>
          <Box>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
        </Box>
        <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
      </CardActionArea>
    </Card>
  );

  const NoteCard = ({ icon, title, date }) => (
    <Card sx={{ mb: 2, bgcolor: "background.paper", borderRadius: 1 }}>
      <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} secondary={`Created on ${date}`} />
        </ListItemButton>
        <IconButton edge="end" aria-label="more">
          <MoreVertIcon />
        </IconButton>
      </CardActionArea>
    </Card>
  );

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h8" gutterBottom>
        Create New Notes
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <OptionCard
            icon={<MicIcon />}
            title="Record or Upload Audio"
            subtitle="Upload an audio file"
            iconColor="primary" // You can set a specific color from your theme
          />
        </Grid>
        {/* Repeat for the other two options with different icons and colors */}
        <Grid item xs={12} md={4}>
          <OptionCard
            icon={<YouTubeIcon />}
            title="YouTube Video"
            subtitle="Paste a YouTube link"
            iconColor="error" // red color for the YouTube icon
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <OptionCard
            icon={<PictureAsPdfIcon />}
            title="PDF Upload"
            subtitle="Upload a PDF file"
            iconColor="secondary" // you can choose any color that fits your theme
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        All Notes
      </Typography>
      <List>
        <NoteCard
          icon={<YouTubeIcon color="error" sx={{ fontSize: 40 }} />}
          title="Function Combination and Composition Techniques within Mathematics"
          date="Tuesday, March 19th"
        />
        <NoteCard
          icon={<PictureAsPdfIcon color="error" sx={{ fontSize: 40 }} />}
          title="Understanding Signal Transformations and System Characteristics"
          date="Tuesday, March 19th"
        />
        {/* ... more notes ... */}
      </List>
    </Box>
  );
}
