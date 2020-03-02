import React from "react";
import classes from "./Tile.module.css"

const Tile = ({title, content}) => {
    return (
        <div className={classes.Tile}>
            <header>{title}</header>
            <article>{content}</article>
        </div>
    );
};

export default Tile;

