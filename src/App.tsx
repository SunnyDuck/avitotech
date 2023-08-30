import React, {useEffect} from 'react';
import {useAppDispatch} from "./hooks/redux";
import {fetchGames} from "./store/reducers/ActionCreator";
import './App.css'
import Header from "./components/header/Header";
import MainPageCards from "./components/mainPageCards/MainPageCards";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
         dispatch(fetchGames())
    }, [])

    return (
        <div className='app-wrapper'>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<MainPageCards/>}/>
                    <Route path='/'/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;