import React, { useEffect } from 'react'
import '../../styles/style.css';
import { AppRouter } from '../appRouter/AppRouter';
import { useSelector, useDispatch } from 'react-redux';
import { Footer } from '../footer/Footer';
export const Container = () => {
    const theme = useSelector(state => state.toggleReducer.toggleTheme);

    return (
        <div className={theme}>
            <AppRouter />
            <Footer />

        </div>
    )
}
