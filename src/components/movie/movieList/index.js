import React, {lazy, Suspense} from "react";
const Movie = lazy(() => import("../movieCard"));
import Grid from "@mui/material/Grid";

const MovieList = ({movies, action}) => {
    let movieCards = movies.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Suspense fallback={<h1>Building movie card</h1>}>
                <Movie key={m.id} movie={m} action={action}/>
            </Suspense>
        </Grid>
    ));
    return movieCards;
};

export default MovieList;