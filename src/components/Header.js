import React from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1
    }
}))

function Header() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                        <Box fontWeight="700">
                            Covid 19
                        </Box>
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon style={{fontSize: 24}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
