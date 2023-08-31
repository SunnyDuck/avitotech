import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SelectGameState} from "../../models/SelectGameState";
import {Game} from "../../models/Game";

const initialState: SelectGameState = <SelectGameState>{
    game: null,
    loading: false,
    error: ''
}

export const selectGameSlice = createSlice({
    name: 'selectGame',
    initialState,
    reducers: {
        gameFetching(state) {
            state.loading = true;
            state.game = null
        },
        gameFetchingSuccess(state, action: PayloadAction<Game>) {
            state.loading = false;
            state.game = action.payload
            state.error = ''
        },
        gameFetchingError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.game = null
            state.error = action.payload
        }
    }
})

export const selectGameReducer = selectGameSlice.reducer