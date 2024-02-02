import React, { useState } from 'react';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Typography,
} from '@mui/material';

const pages = ['Ultimos Lanzamientos', 'popular', 'Buscador'];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const showFavorites = true;

  return (
    <AppBar position="static" style={{ backgroundColor: darkMode ? '#1e1e1e' : '#fff', height: '80px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color: darkMode ? 'whiteSmoke' : 'black' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <Box m={2}>
                <img
                  src="src\assets\entrada-de-cine.png"
                  alt="entrada-de-cine"
                  width={60}
                  height={60}
                />
              </Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: darkMode ? 'inherit' : '#000',
                  textDecoration: 'none',
                }}
              >
                <h5>Movies Finder</h5>
              </Typography>
            </Box>
          </Link>

          <Box
            marginLeft={70}
            sx={{
              flexGrow: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: darkMode ? 'whiteSmoke' : 'black',
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: darkMode ? 'white' : 'black',
                  display: 'block',
                }}
              >
                Home
              </Button>
            </Link>
            {pages.map((page) => (
              <Link
                to={`/${page === 'Ultimos Lanzamientos' ? 'ultimoslanzamientos' : page.toLowerCase()}`}
                key={page}
                style={{
                  textDecoration: 'none',
                  color: darkMode ? 'whiteSmoke' : 'black',
                }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: darkMode ? 'white' : 'black',
                    display: 'block',
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          
            {showFavorites && (
              <Link
                to="/favorites"
                style={{
                  textDecoration: 'none',
                  color: darkMode ? 'whiteSmoke' : 'black',
                }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: darkMode ? 'white' : 'black',
                    display: 'block',
                  }}
                >
                  Favoritos
                </Button>
              </Link>
            )}

          <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
