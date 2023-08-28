import {IGame} from "../../models/IGame";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface GameState {
    games: IGame[],
    loading: boolean,
    error: string
}

const initialState: GameState = {
    games: [],
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
            state.error = ''
        },
        gamesFetchingError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const gameReducer = gameSlice.reducer