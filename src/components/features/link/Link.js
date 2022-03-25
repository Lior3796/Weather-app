import React from 'react'
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router-dom';

export const Link = ({ pathname, text }) => {
    const navigate = useNavigate();

    return (
        <ListItem onClick={() => navigate({ pathname })}>
            <h1>{text}</h1>
        </ListItem >
    )
}
