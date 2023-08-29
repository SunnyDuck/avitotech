import React, {useEffect} from 'react';
import {useAppDispatch} from "./hooks/redux";
import {fetchGames} from "./store/reducers/ActionCreator";
import './App.css'
import Header from "./components/header/Header";
import MainPageCards from "./components/mainPageCards/MainPageCards";

const App = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
         dispatch(fetchGames())
    }, [])

    return (
        <div className='app-wrapper'>
            <Header/>
            <MainPageCards/>
        </div>
    );
};

export default App;