import React, {useState, lazy, Suspense} from "react";

const Header = lazy(() => import("../../movie/headerMovieList"));
const FilterCard = lazy(() => import("../../movie/filterMoviesCard"));
const MovieList = lazy(() => import("../../movie/movieList"));
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({movies, title, action}) {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);

    let displayedMovies = movies
        .filter((m) => {
            return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };

    return (
        <Grid container sx={{padding: '20px'}}>
            <Grid item xs={12}>
                <Suspense fallback={<h1>Building movie header</h1>}>
                    <Header title={title}/>
                </Suspense>
            </Grid>
            <Grid item container spacing={5}>
                <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Suspense fallback={<h1>Building Filter card</h1>}>
                        <FilterCard
                            onUserInput={handleChange}
                            titleFilter={nameFilter}
                            genreFilter={genreFilter}
                        />
                    </Suspense>
                </Grid>
                <Suspense fallback={<h1>Building Movie List</h1>}>
                    <MovieList action={action} movies={displayedMovies}></MovieList>
                </Suspense>
            </Grid>
        </Grid>
    );
}

export default MovieListPageTemplate;