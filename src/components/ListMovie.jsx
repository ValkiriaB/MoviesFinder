import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useNavigate} from 'react-router-dom';
import { useEffect} from 'react'
import useMovies from '../Hooks/UseMovie';

const ListMovie = ({ type }) => {
  const { data, getData } = useMovies();

  useEffect(() => {
    getData(type === 'popular' ? 'popular' : 'top_rated', 1);
  }, [type, getData]);

  const navigate = useNavigate();

  return (
    <Box border="2px solid #1e1e1e" marginLeft={4}>
      <Typography variant="h5" padding={'12px'} color="white" align="center" style={{ backgroundColor: ' #1e1e1e' }}>
        {type === 'popular' ? 'Películas Populares' : 'Películas Más Puntuadas'}
      </Typography>
      <List sx={{ overflow: 'scroll', maxHeight: '430px' }}>
        {data.results && data.results.map((movie, index) => (
          <React.Fragment key={movie.id}>
            <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemAvatar>
                <Avatar
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </ListItemAvatar>
              <ListItemText primary={movie.title} />
              <Button
                style={{ color: 'violet', borderRadius: '40px' }}
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <ChevronRightRoundedIcon />
              </Button>
              
            </ListItem>
            {index < data.results.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ListMovie;
