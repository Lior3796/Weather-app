import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CHANGE_THEME } from '../../../redux/actions/types';
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
            className={theme ? "toggle-container-dark" : "toggle-container-light"}
        >
            <ToggleButton color="secondary" size='large'>Change theme</ToggleButton>

        </ToggleButtonGroup>
    );


}
