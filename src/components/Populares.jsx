import {useEffect, useState } from "react";
import { Typography, Box, Grid, Pagination } from "@mui/material";
import useMovies from "../Hooks/UseMovie";
import CardMovie from "./CardMovie";

const Popular = () => {
 const [page, setPage] = useState(1)
  const { data, getData } = useMovies();

  useEffect(() => {
    getData("popular",1);
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value)
    getData("popular", value);
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={4} display="flex" justifyContent="center"sx={{ fontWeight: 'bold', color: '#ba68c8' }}>
        Películas Populares
      </Typography>
      <Grid container spacing={3}>
        {data.results && data.results.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <CardMovie title={movie.title} poster={movie.poster_path} movieId={movie.id} />
          </Grid>
        ))}
      </Grid>
      <Box mt={7} display="flex" justifyContent="center">
        <Pagination
          count={data.total_pages}
          page={page}
          onChange={handlePageChange}
          sx={{
            '& .MuiPaginationItem-page:hover': {
              backgroundColor: '#ba68c8',
              color: 'white',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Popular;