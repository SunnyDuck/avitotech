import {AppDispatch} from "../store";
import axios, {AxiosHeaders} from "axios";
import {gameSlice} from "./GamesSlice"

export const instance = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
        'X-RapidAPI-Key': 'c87e2837bcmsh0cc3919097f3fe3p11f9dcjsn89845f403431',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    } as AxiosHeaders
});

export const fetchGames = () => async (dispatch: AppDispatch) => {
    try {
        const response = await instance.get('');
        dispatch(gameSlice.actions.gamesFetching())
        console.log(response.data);
        dispatch(gameSlice.actions.gamesFetchingSuccess(response.data))
    } catch (e) {
        console.error(e.message);
        dispatch(gameSlice.actions.gamesFetchingError(e.message))
    }
}

