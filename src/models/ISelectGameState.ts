import {IGameCard} from "./IGameCard";

export interface ISelectGameState {
    game: IGameCard | null,
    loading: boolean,
    error: string
}
