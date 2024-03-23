// App.js
import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme'; // Make sure the path to your theme file is correct
import Dashboard from './pages/DashboardPage';
import Home from './pages/HomePage';
import FlashcardsComponent from './components/FlashCards'; // This is your flashcards component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
