import {Game} from "./Game";

export interface GameState {
    games: Game[],
    platforms: string[],
    genre: string[],
    loading: boolean,
    error: string
}
