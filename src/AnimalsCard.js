import React from "react";

const AnimalsCard = (props) => {
    return (
            <animalCard>
                    <img src={props.src}></img>
                    <p class='animalLabel'>{props.name}</p>
            </animalCard>
        
    );
};

export default AnimalsCard;