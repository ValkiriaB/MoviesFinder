import{ useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useMovies from '../Hooks/UseMovie.jsx';

const MovieCarousel = () => {
  const { data, getData } = useMovies();
  const navigate = useNavigate();  

  const [expanded, setExpanded] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    getData('now_playing', 1);
  }, []);

  const handleExpand = (movie) => {
    setExpanded(!expanded);
    setCurrentMovie(expanded && currentMovie === movie ? null : movie);
  };

  return (
    <Carousel>
      {data.results &&
        data.results.map((movie) => (
          <Grid key={movie.id}>
            <Card
              sx={{
                position: 'relative',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '600px',
                borderRadius: '0px',
                overflow: 'hidden',
              }}
            >
              <Button 
                onClick={() => navigate(`/movie/${movie.id}`)}  
                style={{ position: 'absolute', bottom: '24px', right: '36px', backgroundColor: 'violet'}}
                variant="contained"
                size="small"
              >
                Más información
              </Button>
              <CardContent
                sx={{
                  position: 'absolute',
                  maxWidth: 800,
                  margin: '10px',
                  marginTop: '23rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" component="div" color={'black'}>
                  {movie.title}
                </Typography>
                {movie.overview ? (
                  expanded && currentMovie === movie ? (
                    <>
                      <Typography variant="body2" color={'black'}>
                        {movie.overview}
                      </Typography>
                      <Button
                        style={{ backgroundColor: 'violet' }}
                        m={1}
                        variant="contained"
                        size="small"
                        onClick={() => handleExpand(movie)}
                      >
                        Mostrar menos
                      </Button>
                    </>
                  ) : (
                    <Button
                      style={{ backgroundColor: 'violet' }}
                      m={1}
                      variant="contained"
                      size="small"
                      onClick={() => handleExpand(movie)}
                    >
                      Mostrar más
                    </Button>
                  )
                ) : (
                  <Typography variant="body2" color={'black'}>
                    Esta película no tiene descripción.
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Carousel>
  );
};

export default MovieCarousel;
