import {useEffect, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import './Header.css'
import {fetchFiltersGames} from "../../store/reducers/ActionCreator";
import {Filters} from "../../models/Filters";
import {GenreTagsList} from "../../models/GenreTagsList";
import {SortedGamesTagsList} from "../../models/SortedGamesTagsList";




const Header = () => {



    const {platforms} = useAppSelector(state => state.gamesReducer)
    const [filters, setFilters] = useState<Filters>({
        selectedGenre: null,
        selectedPlatform: null,
        selectedReleaseDate: null
    })

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFiltersGames(filters))
    }, [filters])


    return (
        <header>
            <Autocomplete
                id="combo-box-demo"
                options={platforms}
                sx={{ width: '20%' }}
                renderInput={(params) =>
                    <TextField
                        fullWidth
                        {...params}
                        label="Платформа"
                    />}
                onChange={(event: any, newValue: string | null) => {
                    switch (newValue){
                        case 'PC (Windows)': {
                            setFilters({...filters, selectedPlatform: 'pc'})
                            break;
                        }
                        case 'Web Browser': {
                            setFilters({...filters, selectedPlatform: 'browser'})
                            break;
                        }
                        case 'PC (Windows), Web Browser': {
                            setFilters({...filters, selectedPlatform: 'all'})
                            break
                        }
                        default: {
                            setFilters({...filters, selectedPlatform: 'all'})
                            break
                        }
                    }
                }}
            />
            <Autocomplete
                id="combo-box-demo2"
                options={Object.values(GenreTagsList)}
                sx={{ width: '20%' }}
                renderInput={(params) =>
                    <TextField
                        fullWidth
                        {...params}
                        label="Жанр"
                    />}
                onChange={(event: any, newValue: string | null) => {
                    setFilters({...filters, selectedGenre: newValue})
                }}
            />
            <Autocomplete
                id="combo-box-demo3"
                options={Object.values(SortedGamesTagsList)}
                sx={{ width: '20%' }}
                renderInput={(params) =>
                    <TextField
                        fullWidth
                        {...params}
                        label="Сортировать как..."
                    />}
                onChange={(event: any, newValue: string | null) => {
                    setFilters({...filters, selectedReleaseDate: newValue})
                }}
            />
        </header>
    );
};

export default Header;