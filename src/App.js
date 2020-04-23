import React from 'react'
import Header from './components/Header'
import { createMuiTheme, MuiThemeProvider, Box } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#f44336',
        },
    },
})

const App = () => {
    return (
        <MuiThemeProvider theme={theme} >
            <Box bgcolor="primary.main">
                <Header />
            </Box>
        </MuiThemeProvider>
    )
}

export default App