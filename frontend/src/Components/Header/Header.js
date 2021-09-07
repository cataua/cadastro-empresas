import React, { useState } from "react";
import { Button, Grid, Paper } from '@material-ui/core';
import { openMenu } from '../../reducers/state';
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './css/Header.css';
import Menu from "../Menu";


const Header = (props) => {
    const dispatch = useDispatch();
    return (
        <header className="wrapper">
            <Paper component={'nav'} className={'navbar'} variant={'outlined'}>
                <Grid container justifyContent="space-between" spacing={3} alignItems={'center'}>
                    <Grid item>
                        <Link to={'/'} className={'titleLink'}>
                            <h1>Cadastro de empresas</h1>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => dispatch(openMenu())}>
                            <MenuIcon fontSize="large" />
                        </Button>
                        <Menu />
                    </Grid>
                </Grid>
            </Paper>
        </header>
    )
}

export default Header;