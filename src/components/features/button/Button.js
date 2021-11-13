import React from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITE, DELETE_FAVORITE } from '../../../redux/actions/types';
export const Button = () => {
    const favoriteCity = useSelector(state => state.cityReducer);
    const dispatch = useDispatch();
    const addFavoriteCity = () => {
        console.log('fierd from add favorite city', favoriteCity)
        dispatch({ type: ADD_FAVORITE, payload: favoriteCity })
    }
    const deleteFavoriteCity = () => {
        dispatch({ type: DELETE_FAVORITE, payload: favoriteCity.Key })
    }

    return (
        <div className="button-container" >
            <Stack direction="row" spacing={1}>
                <IconButton onClick={() => addFavoriteCity()} color="primary" aria-label="add to shopping cart">
                    <FavoriteIcon fontSize='large' />
                </IconButton>
                <IconButton onClick={() => deleteFavoriteCity()} color="primary" aria-label="add to shopping cart">
                    <DeleteIcon fontSize='large' />
                </IconButton>
            </Stack>
        </div>
    );
}
