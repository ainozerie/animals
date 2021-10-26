const animalCard = (props) => {
    return (
            <animalCard>
                <img src={props.src}></img>
                <p class='animalLabel'>{props.name}</p>
            </animalCard>
    )
}

export default animalCard;