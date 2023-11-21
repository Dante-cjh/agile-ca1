import React, {lazy, Suspense} from "react";
const Actor = lazy(() => import("../actorCard"));
import Grid from "@mui/material/Grid";

const ActorList = ( {actors, action} ) => {
    let actorCards = actors.map((a) => (
        <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Suspense fallback={<h1>Building Actor Card</h1>}>
                <Actor key={a.id} actor={a} action={action}/>
            </Suspense>
        </Grid>
    ));
    return actorCards;
};

export default ActorList;