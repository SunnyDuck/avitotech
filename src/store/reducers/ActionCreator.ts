import {AppDispatch} from "../store";
import axios, {AxiosHeaders} from "axios";
import {gamesSlice} from "./GamesSlice"
import {IFilters} from "../../models/IFilters";
import {selectGameSlice} from "./SelectGameSlice";

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
        const response = await instance.get('');
        dispatch(gamesSlice.actions.gamesFetching())
        dispatch(gamesSlice.actions.gamesFetchingSuccess(response.data))
    } catch (e) {
        alert(e.message)
        dispatch(gamesSlice.actions.gamesFetchingError(e.message))
        setTimeout(fetchGames, 10000)
    }
}

export const fetchFiltersGames = (filters: IFilters) => async (dispatch: AppDispatch) => {
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

export const fetchGame = (id: number) => async (dispatch: AppDispatch) => {
    try{
        dispatch(selectGameSlice.actions.gameFetching())
        const response = await instance.get(urlForOneGame, {
            params: {
                id: String(id)
            }
        })
        dispatch(selectGameSlice.actions.gameFetchingSuccess(response.data))
    }catch (e) {
        alert(e.message)
        dispatch(selectGameSlice.actions.gameFetchingError(e.message))
        setTimeout(fetchGame, 10000)
    }
}