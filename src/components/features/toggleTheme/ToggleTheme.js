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
        console.log("clicked")
    };

    return (
        <Button onClick={handleChange} >Change theme</Button>
    );


}
