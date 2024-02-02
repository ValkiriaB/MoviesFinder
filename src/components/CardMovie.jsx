import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const CardMovie = ({ title, poster, movieId }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <Card sx={{ maxWidth: 370, marginBottom: 2 }}>
      <CardMedia
        component="img"
        alt={title}
        height="500px"
        image={`https://image.tmdb.org/t/p/w500${poster}`}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Button
            style={{ color: 'violet', borderRadius: '40px'}}
            onClick={handleButtonClick}
          >
            <ChevronRightRoundedIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardMovie;