import React from "react";
import { TextField, Container, Grid, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useMovies from "../Hooks/UseMovie";
import CardMovie from "./CardMovie";
import NotFound from "../assets/searching.png";

const Buscador = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const { searchMovie, data, loading, error } = useMovies();
    const [showNotFound, setShowNotFound] = useState(false);
  
    let searchTimer;
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      setHasSearched(value.trim() !== "");
      if (searchTimer) {
        clearTimeout(searchTimer);
      }
  
      searchTimer = setTimeout(() => {
        searchMovie(value, 1);
        setShowNotFound(
          value.trim() !== "" &&
            !loading &&
            !error &&
            (!data.results || data.results.length === 0)
        );
      }, 900);
    };

  const handleClearSearch = () => {
    setSearchTerm("");
    setHasSearched(false);
    setShowNotFound(false);

    if (searchTimer) {
      clearTimeout(searchTimer);
    }
  };

  return (
    <Container>
      <Box p={5}>
        <TextField
          fullWidth
          variant="outlined"
          label="Buscar películas"
          value={searchTerm}
          onChange={handleInputChange}
          onClear={handleClearSearch}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClearSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& label': {
              color: '#ba68c8', 
            },
            '& fieldset': {
              borderColor: '#ba68c8 !important',
            },
            '&:hover fieldset': {
              borderColor: '#ba68c8 !important', 
            },
          }}
        />
      </Box>
      <Grid container spacing={2}>
        {loading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && data.results && data.results.length > 0 ? (
          data.results.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={4}>
              <CardMovie title={movie.title} poster={movie.poster_path} movieId={movie.id} />
            </Grid>
          ))
        ) : (
          hasSearched && showNotFound && (
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography variant="h5">No se encontraron resultados</Typography>
                <img
                  src={NotFound}
                  alt="Not Found"
                  style={{ maxWidth: "100%", maxHeight: "300px", marginTop: "20px" }}
                />
              </Box>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Buscador;
