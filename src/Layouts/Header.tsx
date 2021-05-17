import React, { FunctionComponent, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from 'react-router-dom';

import logo from '../images/logo.png';



const Header: FunctionComponent<{}> = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();

    const links = [
        {
            route: `/all`,
            title: `Home`,
        }
    ];

    const [open, setOpen] = useState(false);

    var history = useHistory();

    const NavItems = links.map((link) => (
        <Link
            className={"nav-item block uppercase text-center text-md md:inline-block mr-4 md:mr-8 my-3 md:my-0"
                + (link.route === history.location.pathname ? " text-yellow-300 underline" : " text-white no-underline")}
            key={link.title}
            to={link.route}
        >
            {link.title}
        </Link>
    ));



    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div className="flex items-center justify-between w-full">
                        <img src={logo} className="w-10 h-10" alt="logo" />
                        <div>
                            <div className="block md:hidden">
                                <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setOpen(!open)}>
                                    <MenuIcon />
                                </IconButton>
                            </div>
                            <nav
                                className={`hidden md:block flex-none md:flex md:items-center w-full justify-between`}
                            >
                                <div>
                                    {NavItems}
                                </div>
                            </nav>
                        </div>
                    </div>
                </Toolbar>
                <nav
                    className={`${
                        open ? `block` : `hidden`
                        } block md:hidden flex-none md:flex md:items-center w-full justify-between`}
                >
                    <div>
                        {NavItems}
                    </div>
                </nav>
            </AppBar>
        </div>
    )
}

export default Header;