import {GameCard} from "./GameCard";

export interface SelectGameState {
    game: GameCard | null,
    loading: boolean,
    error: string
}
