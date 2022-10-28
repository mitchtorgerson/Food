import React from "react";
import classes from './style.module.scss';

const Card = ({
        name,
        imgUrl
    }) => {

    return (
        <div className={classes.card}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={imgUrl} alt={imgUrl} />
            </div>
            <div className={classes.name}>{name}</div>
        </div>
    );
};

export default Card;
