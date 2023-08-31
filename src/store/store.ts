import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {gamesReducer} from "./reducers/GamesSlice";
import {selectGameReducer} from "./reducers/SelectGameSlice";


const rootReducer = combineReducers({
    gamesReducer,
    selectGameReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
