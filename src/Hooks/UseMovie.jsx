import { useState } from "react";
import axios from "axios";



const useMovies = () => {
  let AccessTokenAuth = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZThkNzYyNDgwZTg2YWYxNGQ0NTliOTNhY2I0NTU1OSIsInN1YiI6IjY1YWFmNzFjYzQzM2VhMDBjNTc0YWQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-3jAYDFi5o9uv7WUObYZFjXgj9TkG5mHs6uikSQws8';
  const [data, setData] = useState([]);
  const [video, setVideo] = useState(null); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (url, dataType) => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AccessTokenAuth}`,
        },
      });

      if (dataType === 'movies') {
        setData(response.data);
      } else if (dataType === 'videos') {
        const trailerKey = response.data.results.find((video) => video.type === "Trailer");
        setVideo(trailerKey ? trailerKey.key : null);
      }
    } catch (error) {
      console.error(`Error fetching ${dataType}:`, error);
      setError(`Error fetching ${dataType}. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  const getData = async (category, pageNumber) => {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=es-MX${pageNumber ? `&page=${pageNumber}` : ""}`;
    await fetchMovies(url, 'movies');
  };

  const searchMovie = async (searchInput, pageNumber) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&language=es-MX&page=${pageNumber}`;
    await fetchMovies(url, 'movies');
  };

  const getVideo = async (movie_Id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_Id}/videos?language=es-MX`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AccessTokenAuth}`,
        },
      });

      const trailerKey = response.data.results.find((video) => video.type === "Trailer");
      return trailerKey ? trailerKey.key : null;
    } catch (error) {
      console.error(`Error fetching videos:`, error);
      return null;
    }
  };

  return { data, getData, searchMovie, video, getVideo, error, loading };
};

export default useMovies;