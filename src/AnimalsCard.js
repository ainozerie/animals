import React from "react";
import {Link} from "react-router-dom";

const AnimalsCard = (props) => {

    return (
            <animalCard>
                    <img Src={props.src} Alt={props.name}></img>
                    <p className='animalLabel'>{props.name}</p>
                    <p><Link to = {`/animals/${props.name}`}>Read more</Link></p>
            </animalCard>
        
    );
};

export default AnimalsCard;