import React from 'react'
import '../../styles/style.css';
import { AppRouter } from '../appRouter/AppRouter';
import { Navbar } from '../navbar/Navbar';
import { useSelector } from 'react-redux';

export const Container = () => {
    const theme = useSelector(state => state.themeReducer.toggleTheme);
    console.log(theme)
    return (
        <div className={theme}>
            <AppRouter />
        </div>
    )
}
