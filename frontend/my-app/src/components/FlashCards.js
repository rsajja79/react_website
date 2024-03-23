import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Card, CardContent, Stack, Paper, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';
import { 
    CardActionArea, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    ListItemButton, 
  } from '@mui/material';
  import MicIcon from '@mui/icons-material/Mic';
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  import AutoStoriesIcon from '@mui/icons-material/AutoStories'; // Importing a paper-like icon


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

const cardStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    backfaceVisibility: 'hidden',
  };

// FlipCard component
const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  

  return (
    <div onClick={flipCard} style={{ perspective: '1000px' }}>
      <div style={{
        position: 'relative',
        width: '400px',
        height: '300px',
        textAlign: 'center',
        transition: 'transform 0.8s',
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
      }}>
        <Card style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            backfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {front}
            </Typography>
          </CardContent>
        </Card>
        <Card style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {back}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Sample data for flashcards
const cardsData = [
  {
    title: 'Domain of Functions',
    content: 'The domain of combined functions is the intersection of the domains of the original functions, ensuring compatibility.'
  },
  {
    title: 'Composition of Functions',
    content: 'Composing functions means applying one function to the result of another, following the order of operations.'
  },
  // ...additional cards
];

// FlashcardsComponent
export default function FlashcardsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = useTheme();
  // Handlers for previous and next buttons
  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
    setIsFlipped(false);
  };
  const goNext = () => {
    setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
    setIsFlipped(false);
  };

  return (
    <Box sx={{ color: 'white', minHeight: '100vh', p: 4, bgcolor: useTheme().palette.background.paper}}>
     <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}> {/* Add left margin here */}
        <AutoStoriesIcon sx={{ fontSize: 60, color: 'white', mr: 2 }} /> {/* Icon next to text */}
        <Typography variant="h4" gutterBottom>
          Flashcards
        </Typography>
      </Box>
      <Typography variant="subtitle1" sx={{ ml: 14 }}> {/* Add left margin to subtitle */}
          70 flashcards to study
        </Typography>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mt={4}>
        {/* <IconButton onClick={goPrev}>
          <ArrowBackIcon fontSize="large" />
        </IconButton> */}
        <FlipCard front={cardsData[currentIndex].title} back={cardsData[currentIndex].content} />
        {/* <IconButton onClick={goNext}>
          <ArrowForwardIcon fontSize="large" />
        </IconButton> */}
      </Stack>

      


      <Stack direction="row" spacing={18} alignItems="center" justifyContent="center" mt={4}>
        <IconButton onClick={goPrev}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Box sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100%', // Set a specific height or inherit it from parent
        }}>
        <Typography variant="subtitle1" sx={{ color: 'white' }}>
            {currentIndex + 1} / {cardsData.length}
        </Typography>
        </Box>
        <IconButton onClick={goNext}>
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </Stack>
     

    <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6}>
          <OptionCard
            icon={<EditIcon />}
            title="Edit"
            iconColor="primary" // You can set a specific color from your theme
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <OptionCard
            icon={<ArrowForwardIcon />}
            title="Flashcards"
            iconColor="secondary" // you can choose any color that fits your theme
          />
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', height: '400px' }}>
  {cardsData.map((card, index) => (
    <Paper key={index} elevation={4} sx={{
      display: 'flex', 
      my: 3, 
      borderRadius: 3, // This will round the corners
      overflow: 'hidden', // Make sure the children don't overflow the rounded corners
    }}>
      <Box sx={{ 
        flex: 1, 
        borderRight: '1px solid grey', 
        px: 3, 
        py: 4, // Adds padding top and bottom
        display: 'flex',
        alignItems: 'center', // This will vertically center your text
        justifyContent: 'flex-start', // This will align your text to the left
      }}>
        <Typography variant="h6" component="div" sx={{ 
          fontWeight: 'bold', 
          fontFamily: 'Monospace', // This makes the font monospaced, which can look fancier depending on your design
        }}>
          {card.title}
        </Typography>
      </Box>
      <Box sx={{ 
        flex: 1, 
        px: 2, 
        py: 3,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Typography variant="body1" sx={{ 
          fontFamily: 'Cursive', // This makes the font cursive, which can look fancier
        }}>
          {card.content}
        </Typography>
      </Box>
    </Paper>
  ))}
</Box>
    </Box>
    
  );
}
