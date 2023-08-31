import {useEffect} from 'react';
import {useAppDispatch} from "./hooks/redux";
import {fetchGames} from "./store/reducers/ActionCreator";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./components/mainPage/MainPage";
import GamePage from "./components/gamePage/gamePage";

const App = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
         dispatch(fetchGames())
    }, [])

    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='card/:card' element={<GamePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;