import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CHANGE_THEME } from '../../../redux/Actions/types';
export const ToggleTheme = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(true);
    const handleChange = (event) => {
        setTheme(!theme);
        dispatch({ type: CHANGE_THEME, payload: theme })
    };
    return (
        <ToggleButtonGroup
            onChange={handleChange}
        >
            <ToggleButton >change theme</ToggleButton>

        </ToggleButtonGroup>
    );


}
