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