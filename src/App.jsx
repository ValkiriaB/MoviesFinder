import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FavoritesPage from './components/Favorites';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DetailMovie from './components/DetailMovie';
import Populares from './components/Populares';
import UltimosLanzamientos from './components/UltimosLanzamientos';
import Buscador from './components/Buscador';
import Footer from './components/Footer';

const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/popular" element={<Populares />} />
          <Route path="/ultimoslanzamientos" element={<UltimosLanzamientos />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}


