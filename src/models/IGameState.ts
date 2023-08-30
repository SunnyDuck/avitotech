import {IGame} from "./IGame";

export interface IGameState {
    games: IGame[],
    platforms: string[],
    genre: string[],
    loading: boolean,
    error: string
}
