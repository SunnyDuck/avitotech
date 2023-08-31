import React from 'react';
import {CircularProgress} from "@mui/material";
import GameCard from "../gameCard/GameCard";
import {useAppSelector} from "../../hooks/redux";
import './MainPageCards.css'

const MainPageCards = () => {

    const {games, loading} = useAppSelector(state => state.gamesReducer)


    return (
        <div>
            {loading
                ?
                <CircularProgress/>
                :
                <div className='cards-wrapper'>
                    {games.map((game) => {
                        return <GameCard
                            key={game.id}
                            gameName={game.title}
                            thumbnail={game.thumbnail}
                            developer={game.developer}
                            releaseDate = {game.release_date}
                            genre = {game.genre}
                            id = {game.id}
                        />
                    })}
                </div>
            }
        </div>
    );
};

export default MainPageCards;