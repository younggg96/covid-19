import React from 'react'
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core'




function Header() {
    return (
        <React.Fragment>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography variant="h3">
                        <Box fontWeight="700">
                            Covid 19
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
