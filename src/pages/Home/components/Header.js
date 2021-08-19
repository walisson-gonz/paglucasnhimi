import React from 'react';

import { makeStyles } from '@material-ui/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Bell } from 'react-feather';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 40,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    mr:{
        marginRight: 10,
    },
    
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/deezer-logo-.png" alt="logo" className={classes.img} />

                <div className={classes.grow}></div>

                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.mr}>
                        Novo Post
                    </Button>

                    <SvgIcon  className={classes.mr}>
                        <Bell />
                    </SvgIcon >
                    <Avatar alt="Gonz" src=""/>
                </div>

                {/* <div className="">
                    <span className="">Gonz Music</span>
                </div>
                <div className="">
                    <span>Img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;