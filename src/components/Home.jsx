import Carousel from "./Carousel"
import MovieList from './ListMovie'
import {Box} from '@mui/material';

function Home() {
  
    return (
      <>
   
       <Carousel/>
       <Box  style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'40px' }}>
        <Box width="100%" maxWidth="750px"style={{marginLeft:'100px'}}>
          <MovieList type="popular" />
        </Box>
        <Box width="100%" maxWidth="750px" style={{ marginRight: '100px'}}>
        <MovieList type="top_rated" />
            
        </Box>
         
       
     </Box>
      </>
    )
  }
  
  export default Home;
  