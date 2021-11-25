import React, { useEffect } from 'react'
import '../../styles/style.css';
import { AppRouter } from '../appRouter/AppRouter';
import { useSelector, useDispatch } from 'react-redux';

export const Container = () => {
    const theme = useSelector(state => state.toggleReducer.toggleTheme);

    return (
        <div className={theme}>
            <AppRouter />
        </div>
    )
}
