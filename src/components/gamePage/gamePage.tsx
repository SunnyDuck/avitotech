import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchGame} from "../../store/reducers/ActionCreator";
import {Button, CircularProgress} from "@mui/material";
import { Home } from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import './gamePage.css'
import Carousel from "react-material-ui-carousel";

const GamePage = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {game, loading} = useAppSelector(state => state.selectGameReducer)



    useEffect(() => {
        dispatch(fetchGame(history.state.usr.cardId))
    }, [])

    return (
        <div>
            {loading
                ?
                <CircularProgress/>
                :
                <div className='game-page-wrapper'>
                    <div className='escape-button-wrapper'>
                        <Button
                            className='escape-button'
                            variant='outlined'
                            color='success'
                            startIcon={<Home color='disabled'/>}
                            onClick={() => navigate('/')}
                        >
                            Вернуться назад
                        </Button>
                    </div>
                    <div className='game-card-wrapper'>
                        <img src={game?.thumbnail}/>
                        <h1>{game?.title}</h1>
                        <h3>Дата выхода: {game?.release_date}</h3>
                        <h3>Жанр: {game?.genre}</h3>
                        <h3>Разработчик: {game?.developer}</h3>
                        <h3>Издатель: {game?.publisher}</h3>
                        <h3>Минимальные системные требования:</h3>
                        <h4>Процессор: {game?.minimum_system_requirements.processor}</h4>
                        <h4>Видеокарта: {game?.minimum_system_requirements.graphics}</h4>
                        <h4>Оперативная память: {game?.minimum_system_requirements.memory}</h4>
                        <h4>Место на диске: {game?.minimum_system_requirements.storage}</h4>
                        <h4>Операционная система: {game?.minimum_system_requirements.os}</h4>
                        <Carousel>
                            {game?.screenshots.map((index) => (
                                <img src={index.image} key={index.id}/>
                            ))}
                        </Carousel>
                    </div>
                </div>
            }
        </div>
    );
};

export default GamePage;