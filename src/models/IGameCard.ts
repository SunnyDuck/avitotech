import {ISystemRequirements} from "./ISystemRequirements";
import {IScreenshots} from "./IScreenshots";

export interface IGameCard{
    id: number,
    title: string,
    thumbnail: string,
    genre: string,
    publisher: string,
    developer: string,
    release_date: string,
    minimum_system_requirements: ISystemRequirements,
    screenshots: IScreenshots
}