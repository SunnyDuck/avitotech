import {AppDispatch} from "../store";
import axios, {AxiosHeaders} from "axios";
import {gamesSlice} from "./GamesSlice"
import {Filters} from "../../models/Filters";
import {selectGameSlice} from "./SelectGameSlice";
import {Game} from "../../models/Game";

const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
const urlForOneGame = 'https://free-to-play-games-database.p.rapidapi.com/api/game'

export const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'X-RapidAPI-Key': 'c87e2837bcmsh0cc3919097f3fe3p11f9dcjsn89845f403431',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    } as AxiosHeaders
});

export const fetchGames = () => async (dispatch: AppDispatch) => {
    try {
        const response = await instance.get<Game[]>('');
        dispatch(gamesSlice.actions.gamesFetching())
        dispatch(gamesSlice.actions.gamesFetchingSuccess(response.data))
    } catch (e) {
        alert(e.message)
        dispatch(gamesSlice.actions.gamesFetchingError(e.message))
        setTimeout(fetchGames, 10000)
    }
}

export const fetchFiltersGames = (filters: Filters) => async (dispatch: AppDispatch) => {
    try {
        dispatch(gamesSlice.actions.gamesFetching())
        const response = await instance.get('', {
            params: {
                platform: filters.selectedPlatform,
                category: filters.selectedGenre?.toLowerCase(),
                'sort-by': filters.selectedReleaseDate
            }
        });
        dispatch(gamesSlice.actions.gamesFetchingSuccess(response.data))
    } catch (e) {
        alert(e.message)
        dispatch(gamesSlice.actions.gamesFetchingError(e.message))
        setTimeout(fetchFiltersGames, 10000)
    }
}

function dateDiffInMinutes(date1:Date, date2: Date) {
    const msDifference = date2 - date1;
    const minutes = Math.floor(msDifference / 1000 / 60);
    return minutes;
}

export const fetchGame = (id: number) => async (dispatch: AppDispatch) => {
    const cachedCardGame = JSON.parse(localStorage.getItem(String(id)))
    try{
        const isCardGame = new Date(cachedCardGame?.date)
        if(dateDiffInMinutes(isCardGame, new Date()) < 5){
            dispatch(selectGameSlice.actions.gameFetchingSuccess(cachedCardGame))
            return
        }
        dispatch(selectGameSlice.actions.gameFetching())
        const response = await instance.get(urlForOneGame, {
            params: {
                id: String(id)
            }
        })
        dispatch(selectGameSlice.actions.gameFetchingSuccess(response.data))
        localStorage.setItem(String(id), JSON.stringify({...response.data, date: Date.now()}))
    }catch (e) {
        alert(e.message)
        dispatch(selectGameSlice.actions.gameFetchingError(e.message))
        setTimeout(fetchGame, 10000)
    }
}