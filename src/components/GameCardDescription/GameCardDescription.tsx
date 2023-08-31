import React from 'react';
import {useAppSelector} from "../../hooks/redux";

const GameCardDescription = () => {

    const {game} = useAppSelector(state => state.selectGameReducer)

    return (
        <div>
            <img src={game?.thumbnail}/>
            <h1>{game?.title}</h1>
            <p>Дата выхода: {game?.release_date}</p>
            <p>Жанр: {game?.genre}</p>
            <p>Разработчик: {game?.developer}</p>
            <p>Издатель: {game?.publisher}</p>
            <p>Минимальные системные требования:</p>
            <p>Процессор: {game?.minimum_system_requirements.processor}</p>
            <p>Видеокарта: {game?.minimum_system_requirements.graphics}</p>
            <p>Оперативная память: {game?.minimum_system_requirements.memory}</p>
            <p>Место на диске: {game?.minimum_system_requirements.storage}</p>
            <p>Операционная система: {game?.minimum_system_requirements.os}</p>
        </div>
    );
};

export default GameCardDescription;