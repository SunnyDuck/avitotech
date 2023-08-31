import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchGame} from "../../store/reducers/ActionCreator";
import {Button, CircularProgress} from "@mui/material";
import { Home } from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import './gamePage.css'
import Carousel from "react-material-ui-carousel";
import GameCardDescription from "../GameCardDescription/GameCardDescription";

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
                        <GameCardDescription/>
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