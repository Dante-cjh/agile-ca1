import React from "react";
import { getUpcomingMovie } from "../api/tmdb-api";
import PageTemplate from '../components/templatePage/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from '../components/cardIcons/addToWatch'

const UpcomingMoviePage = (props) => {

  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovie)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviePage;