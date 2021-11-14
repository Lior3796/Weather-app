import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { CHANGE_UNIT } from '../../../redux/actions/types';
export const ToggleUnit = () => {
    const dispatch = useDispatch();
    const [temp, setTemp] = useState(true);

    const changeUnit = () => {
        setTemp(!temp);
        dispatch({ type: CHANGE_UNIT, payload: temp })
    };
    return (
        <Button onClick={() => changeUnit()} size="small">change Unit </Button>
    );


}
