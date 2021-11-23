import React, { useEffect } from 'react'
import '../../styles/style.css';
import { AppRouter } from '../appRouter/AppRouter';
import { useSelector, useDispatch } from 'react-redux';
import { RESET_FAVORITE } from '../../../redux/actions/types';
export const Container = () => {
    const theme = useSelector(state => state.toggleReducer.toggleTheme);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: RESET_FAVORITE })
    }, [])
    return (
        <div className={theme}>
            <AppRouter />
        </div>
    )
}
