import React, {useState, lazy, Suspense} from "react";
import Grid from "@mui/material/Grid";
import Header from "../../movie/headerMovieList";
const ActorList= lazy(() => import("../../actor/actorList"));

function ActorListPageTemplate({actors, action}) {
    return (
        <Grid container sx={{ padding: '20px' }}>
            <Grid item xs={12}>
                <Header title="Popular People" />
            </Grid>
            <Grid item container spacing={5}>
                <Suspense fallback={<h1>Building actor list</h1>}>
                    <ActorList actors={actors} action={action}></ActorList>
                </Suspense>
            </Grid>
        </Grid>
    );
}

export default ActorListPageTemplate;