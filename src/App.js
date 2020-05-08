import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Mapbox from './components/Mapbox'
import CaseList from './components/CasesList';
import { Container } from '@material-ui/core';


const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
            <Container maxWidth="xl">
                <Mapbox />
                <CaseList />
            </Container>
        </React.Fragment>
    )
}

export default App