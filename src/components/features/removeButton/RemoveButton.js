import React from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_FAVORITE } from '../../../redux/actions/types';

export const RemoveButton = () => {
    const favoriteCity = useSelector(state => state.cityReducer);
    const dispatch = useDispatch();

    const deleteFavoriteCity = () => {
        dispatch({ type: DELETE_FAVORITE, payload: favoriteCity.Key })
    }

    return (
        <IconButton onClick={() => deleteFavoriteCity()} color="primary" aria-label="add to shopping cart">
            <DeleteIcon fontSize='large' />
        </IconButton>
    );
}
