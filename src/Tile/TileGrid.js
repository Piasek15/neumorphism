import React from "react";
import Tile from "./Tile";
import classes from "./TileGrid.module.css"

const tileList = [
        {
            title: 'title1', content: 'content1'
        },
        {
            title: 'title2', content: 'content2'
        },
        {
            title: 'title3', content: 'content3'
        },
        {
            title: 'title4', content: 'content4'
        },
        {
            title: 'title5', content: 'content5'
        },
    ]

;

const TileGrid = () => {
    return (
        <div className={classes.TileGrid}>
            {tileList.map(tile => (
                <Tile title={tile.title} content={tile.content}/>
            ))}
        </div>
    );
};

export default TileGrid;