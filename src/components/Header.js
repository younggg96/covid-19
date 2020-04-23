import React from 'react'
import headerImg from '../assets/imgs/CoronaVirusHeader.jpg'
import { AppBar, Toolbar, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar color="primary">
                <Toolbar>
                    <Box fontWeight="700">
                        Covid 19
                    </Box>
                </Toolbar>
            </AppBar>
            <div>
                <img src={headerImg} alt="" className={classes.root} />
            </div>
        </React.Fragment>
    );
}

export default Header;