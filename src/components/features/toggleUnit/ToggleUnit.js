import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CHANGE_UNIT } from '../../../redux/actions/types';
export const ToggleUnit = () => {
    const dispatch = useDispatch();
    const [temp, setTemp] = useState(true);
    const { toggleTheme } = useSelector(state => state.toggleReducer)
    const changeUnit = () => {
        setTemp(!temp);
        dispatch({ type: CHANGE_UNIT, payload: temp })
    };
    return (
        <ToggleButtonGroup
            onClick={() => changeUnit()}
            className={`toggle-container-${toggleTheme}`}
        >
            <ToggleButton style={{ fontFamily: "Assistant", fontSize: "1.2rem", marginRight: "5px" }} color="secondary" size="medium">Change Unit</ToggleButton>
        </ToggleButtonGroup>
    );


}
