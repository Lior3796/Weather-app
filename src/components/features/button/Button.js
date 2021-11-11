import React from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITE } from '../../../redux/Actions/types';
export const Button = () => {
    const dispatch = useDispatch();
    const favoriteCity = useSelector(state => state.cityReducer);
    const addCity = () => {
        console.log("fires");
        dispatch({ type: ADD_FAVORITE, payload: favoriteCity })
    }

    return (
        <div id="button" className="button-container" >
            <Stack direction="row" spacing={1}>
                <IconButton onClick={() => addCity()} color="primary" aria-label="add to shopping cart">
                    <FavoriteIcon fontSize='large' />
                </IconButton>
            </Stack>
        </div>
    );
}
