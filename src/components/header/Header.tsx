import React, {useEffect, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import './Header.css'
import {fetchGames} from "../../store/reducers/ActionCreator";
import {IFilters} from "../../models/IFilters";




const Header = () => {

    const {platforms, genre, releaseDate} = useAppSelector(state => state.gameReducer)
    //const [selectPlatform, setSelectPlatform] = useState<string>(' ')
    //const [selectGenre, setSelectGenre] = useState<string>(' ')
    //const [selectReleaseDate, setSelectReleaseDate] = useState<string>(' ')
    const [filters, setFilters] = useState<IFilters>({
        selectedGenre: '',
        selectedPlatform: '',
        selectedReleaseDate: ''
    })

    const dispatch = useAppDispatch()

    useEffect(() => {

    }, [filters])

    return (
        <header>
            <Autocomplete
                id="combo-box-demo"
                options={platforms}
                sx={{ width: '33%' }}
                renderInput={(params) =>
                    <TextField
                        fullWidth
                        {...params}
                        label="Платформа"
                    />}
                onChange={(event: any, newValue: string | null) => {
                    setFilters({...filters, selectedPlatform: newValue})
                }}
            />
            <Autocomplete
                id="combo-box-demo2"
                options={genre}
                sx={{ width: '33%' }}
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
                options={releaseDate}
                sx={{ width: '33%' }}
                renderInput={(params) =>
                    <TextField
                        fullWidth
                        {...params}
                        label="Дата выхода"
                    />}
                onChange={(event: any, newValue: string | null) => {
                    setFilters({...filters, selectedReleaseDate: newValue})
                }}
            />
        </header>
    );
};

export default Header;