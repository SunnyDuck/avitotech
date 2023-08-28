import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchGames} from "./store/reducers/ActionCreator";
import './App.css'
import GameCard from "./components/gameCard/GameCard";

const App = () => {

    const {games, loading} = useAppSelector(state => state.gameReducer)
    const dispatch = useAppDispatch()


    useEffect(() => {
         dispatch(fetchGames())
    }, [])


    return (
        <div className='app-wrapper'>
            <header>
                sefsef
            </header>
            <div className='cards-wrapper'>
                {games.map((game) => {
                    return <GameCard
                        key={game.id}
                        gameName={game.title}
                        thumbnail={game.thumbnail}
                        developer={game.developer}
                        releaseDate = {game.release_date}
                        genre = {game.genre}
                    />
                })}
            </div>
        </div>
    );
};

export default App;