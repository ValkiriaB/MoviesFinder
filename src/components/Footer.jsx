import { useEffect } from 'react';
import {  Typography,Box } from "@mui/material";


const Footer = () => {
  useEffect(() => {
    const footer = document.getElementById('footer');

    const handleScroll = () => {
      
      if (window.scrollY > 200) {
        footer.style.display = 'block';
      } else {
        footer.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <Box
      id="footer"
      style={{
        backgroundColor: "#1e1e1e",
        height: "70px",
        position: "sticky",
        bottom: 0,
        width: "100%",
        display: "none",
        zIndex: 1000,
      }}
    >
		<Typography 
        variant="h6" 
        sx={{   
          letterSpacing: ".3rem",
          fontFamily: "monospace",
          color: "whiteSmoke",
          textAlign: "center",
          paddingTop: "20px"
        }}
      >
        Hecho por Vale
      </Typography>
     
    </Box>
  );
};

export default Footer;

  