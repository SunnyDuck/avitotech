import './GameCard.css'

interface gameCardProps {
    gameName: string,
    thumbnail: string,
    developer: string,
    releaseDate: string,
    genre: string
}

const GameCard = (props: gameCardProps) => {

    return (
        <div className='card-wrapper'>
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