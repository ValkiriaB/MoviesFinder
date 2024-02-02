import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useFavorites } from "../context/FavoritesContext";
import CardMovie from "./CardMovie";
import NoFavoritesImage from "../assets/Notfound.png";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useFavorites();

  const handleRemoveFavorite = (movieId) => {
    removeFavorite(movieId);
  };

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        p={3}
        mt={4}
        mb={2}
        display="flex"
        justifyContent="center"
        sx={{ fontWeight: 'bold', color: '#ba68c8' }}
      >
        Tus Películas Favoritas
      </Typography>

      {favorites.length === 0 ? (
        <Box textAlign="center">
          <Typography variant="h6" color="textSecondary" mt={4}>
            Aun no agregaste ninguna pelicula en favoritos.
          </Typography>
          <img src={NoFavoritesImage} alt="No Favorites" style={{ maxWidth: "100%", marginTop: 20 }} />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {favorites.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <CardMovie title={movie.title} poster={movie.poster_path} movieId={movie.id} />
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleRemoveFavorite(movie.id)}
                sx={{ mt: 2 }}
              >
                Quitar de Favoritos
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default FavoritesPage;
