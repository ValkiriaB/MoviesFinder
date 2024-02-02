
import React from 'react';
import { IconButton } from '@mui/material';
import MoonIcon from '../assets/luna.png';  
import SunIcon from '../assets/sol.png';    

const DarkMode = ({ toggleDarkMode, darkMode }) => {
  return (
    <IconButton onClick={toggleDarkMode} color="inherit">
      {darkMode ? <img src={SunIcon} alt="Sun" width="25" height="25" /> : <img src={MoonIcon} alt="Moon" width="25" height="25" />}
    </IconButton>
  );
};

export default DarkMode;
