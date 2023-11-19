import React from 'react';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";

const ActorCard = ({actor}) => {

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                title={
                    <Typography variant="h5" component="p">
                        {actor.name}
                    </Typography>
                }
            />
                <Link to={`/actors/${actor.id}`}>
                    <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                    />
                </Link>
            <CardActions>
                <CardContent>
                    <Typography variant="subtitle1" color="text.sendary">
                        {actor.name}
                    </Typography>
                </CardContent>
            </CardActions>
        </Card>
    );
};

export default ActorCard;