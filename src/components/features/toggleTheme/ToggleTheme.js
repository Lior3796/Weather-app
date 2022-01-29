import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CHANGE_THEME, CHANGE_UNIT } from '../../../redux/actions/types';

export const ToggleTheme = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(true);

    const handleChange = () => {
        setTheme(!theme);
        dispatch({ type: CHANGE_THEME, payload: theme });
    };

    return (
        <Button sx={{ fontSize: 20 }} onClick={handleChange} >{theme ? "Dark" : "Light"}</Button>
    );


}
