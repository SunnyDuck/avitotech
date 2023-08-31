import {Game} from "../../models/Game";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GameState} from "../../models/GameState";

const initialState: GameState = {
    games: [ ],
    platforms: [ ],
    genre: [ ],
    loading: false,
    error: ''
}

export const gamesSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        gamesFetching(state) {
            state.loading = true;
        },
        gamesFetchingSuccess(state, action: PayloadAction<Game>) {
            state.loading = false;
            state.games = action.payload
            state.games.forEach((game) => {
                if(!state.platforms.includes(game.platform)){
                    state.platforms.push(game.platform)
                }
                if(!state.genre.includes(game.genre)){
                    state.genre.push(game.genre)
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

export const gamesReducer = gamesSlice.reducer