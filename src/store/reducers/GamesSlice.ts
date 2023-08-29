import {IGame} from "../../models/IGame";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface GameState {
    games: IGame[],
    platforms: string[],
    genre: string[],
    releaseDate: string[],
    loading: boolean,
    error: string
}

const initialState: GameState = {
    games: [ ],
    platforms: [ ],
    genre: [ ],
    releaseDate: [ ],
    loading: false,
    error: ''
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        gamesFetching(state) {
            state.loading = true;
        },
        gamesFetchingSuccess(state, action: PayloadAction<IGame>) {
            state.loading = false;
            state.games = action.payload
            state.games.forEach((game) => {
                if(!state.platforms.includes(game.platform)){
                    state.platforms.push(game.platform)
                }
                if(!state.genre.includes(game.genre)){
                    state.genre.push(game.genre)
                }
                if(!state.releaseDate.includes(game.release_date.slice(0, 4))){
                    state.releaseDate.push(game.release_date.slice(0, 4))
                }
            })
            state.error = ''
        },
        gamesFetchingError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const gameReducer = gameSlice.reducer