import React, { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from '../components/Sidebar'; // If you have a generic sidebar
import StudentSidebar from '../components/StudentSidebar'; // Sidebar for students
import MainContent from '../components/MainContent'; // Default main content
import FlashcardsComponent from '../components/FlashCards'; // Flashcards component
// Import other components you want to render in the main content area
import { useLocation } from 'react-router-dom';
import theme from '../components/theme';


export default function DashboardPage() {
  const [content, setContent] = useState('main'); // Could be 'main', 'flashcards', 'other', etc.

  // Define a function to change the main content
  const selectContent = (selectedContent) => {
    setContent(selectedContent);
  };

  const location = useLocation();
  const { userType } = location.state || { userType: 'student' }; // Default to 'student' if not provided

  // Determine which sidebar to render
  const SidebarComponent = userType === 'instructor' ? Sidebar : StudentSidebar;

  // Render the selected content
  const renderContent = () => {
    switch (content) {
      case 'main':
        return <MainContent />;
      case 'flashcards':
        return <FlashcardsComponent />;
      // Add more cases for other content types
      default:
        return <MainContent />;
    }
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* Pass the selectContent function to your sidebar so it can update the state */}
        <SidebarComponent selectContent={selectContent} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: theme.palette.background.default } }>
          {renderContent()}
        </Box>
      </Box>
    </>
  );
}
