import React from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITE } from '../../../redux/actions/types';

export const AddButton = () => {
    const favoriteCity = useSelector(state => state.cityReducer);
    const dispatch = useDispatch();
    const addFavoriteCity = () => {
        dispatch({ type: ADD_FAVORITE, payload: favoriteCity })
    }
    return (

        <IconButton onClick={() => addFavoriteCity()} color="primary" aria-label="add to shopping cart">
            <FavoriteIcon fontSize='large' />
        </IconButton>


    );
}
