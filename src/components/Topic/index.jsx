import React from 'react';
import {
    Avatar,
    Card, CardActionArea,
    CardActions,
    CardHeader,
    Typography
} from "@mui/material";
import { Star, Category } from "@mui/icons-material";
import { string, number, func } from "prop-types";

const Topic = ({ title, id, stars, onClick, className }) => {
    const handleOnClick = () => onClick(title);
    return (
        <Card className={className}>
            <CardActionArea onClick={handleOnClick}>
                <CardHeader
                    avatar={ <Avatar sx={{ bgcolor: '#6a829e' }}><Category/></Avatar>}
                    title={title}
                    subheader={id}
                />
                <CardActions>
                    <Star sx={{ color: 'yellow' }}/>
                    <Typography variant="body2">
                        {stars}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

Topic.defaultProps = {
    className: ''
}

Topic.propTypes = {
    title: string.isRequired,
    id: string.isRequired,
    stars: number.isRequired,
    onClick: func.isRequired,
    className: string
};

export default Topic;
