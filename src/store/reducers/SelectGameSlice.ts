import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISelectGameState} from "../../models/ISelectGameState";
import {IGame} from "../../models/IGame";

const initialState: ISelectGameState = <ISelectGameState>{
    game: null,
    loading: true,
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
        gameFetchingSuccess(state, action: PayloadAction<IGame>) {
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