import {SystemRequirements} from "./SystemRequirements";
import {Screenshots} from "./Screenshots";

export interface GameCard {
    id: number,
    title: string,
    thumbnail: string,
    genre: string,
    publisher: string,
    developer: string,
    release_date: string,
    minimum_system_requirements: SystemRequirements,
    screenshots: Screenshots
}