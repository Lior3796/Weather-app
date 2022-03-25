import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { ToggleUnit } from '../toggleUnit/ToggleUnit';
import { Link } from '../link/Link';
import { Typography } from '@mui/material';
import { ToggleTheme } from '../toggleTheme/ToggleTheme';
import { AddButton } from '../addButton/AddButton';
import { RemoveButton } from '../removeButton/RemoveButton';
import { Header } from '../header/Header';
import { useSelector } from 'react-redux';


export default function Sidebar() {
    const favoriteCity = useSelector(state => state.cityReducer)
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ [anchor]: open });
    };

    const sidebarsLinks = [
        { pathname: "/Weather-app/favorites", text: "favorite" },
        { pathname: "/Weather-app", text: "weather" },
    ]

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List >
                {sidebarsLinks.map((link, key) => <Link key={key} pathname={link.pathname} text={link.text} />)}
            </List>
            <Header favoriteCity={favoriteCity} />

            <Divider />

        </Box>
    );

    return (
        <>
            <Button style={{ zIndex: 10 }} onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
            <SwipeableDrawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>

        </>


    );
}
