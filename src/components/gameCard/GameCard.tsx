import './GameCard.css'
import {GameCardProps} from "../../models/GameCardProps";
import {useNavigate} from "react-router-dom";

const GameCard = (props: GameCardProps) => {

    const navigate = useNavigate();
    return (
        <div className='card-wrapper' onClick={() => navigate('card/' + props.gameName, { state: { cardId: props.id } })}>
            <img src= {props.thumbnail}/>
            <div className='card-game-name'>
                {props.gameName}
            </div>
            <div>
                <p>
                    Жанр:  {props.genre}
                </p>
            </div>
            <div>
                <p>
                    Издатель: {props.developer}
                </p>
            </div>
            <div>
                <p>
                    Дата выхода: {props.releaseDate}
                </p>
            </div>
        </div>
    );
};

export default GameCard;