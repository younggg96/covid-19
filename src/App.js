import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#f44336',
        },
        typography: {
            fontFamily: 'Press Start 2P'
        },
    },
})

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <Content />
        </MuiThemeProvider>
    )
}

export default App