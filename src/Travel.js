import React from "react";

const Travel = props => (
    <figure>
        <img src={ props.photo } alt={ props.destination }/>
        <blockquote>{ props.destination }</blockquote>
        <blockquote>{ props.country }</blockquote>
        <blockquote>{ props.distance }</blockquote>
    </figure>
);

export default Travel;
