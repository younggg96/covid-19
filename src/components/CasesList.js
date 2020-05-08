import React from 'react'
import { Typography, Box, Grid, List, ListItem, makeStyles, Divider } from '@material-ui/core'
import { useApi } from '../Api/useApi'

const useStyle = makeStyles((theme) => {

});

function CaseList(props) {
    const listByCases = useApi('/countries?sort=cases', null)
    const listByDeaths = useApi('/countries?sort=deaths', null)
    const listByRecovered = useApi('/countries?sort=recovered', null)

    return (
        <React.Fragment>
            <Typography variant="h2" gutterBottom style={{ paddingLeft: "32px" }}>
                <Box fontWeight={300}>
                    - World Cases List -
                </Box>
            </Typography>
            <Grid container style={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <Grid item xs={12} md={4}>
                    <List>
                        <ListItem>
                            <Grid container justify="space-between">
                                <Grid item xs={12}><Typography variant="h2" gutterBottom>Sort by Cases</Typography></Grid>
                                <Grid item xs={1}><Typography variant="h3">Rank</Typography></Grid>
                                <Grid item xs></Grid>
                                <Grid item xs><Typography variant="h3">country</Typography></Grid>
                                <Grid item xs><Typography variant="h3">cases</Typography></Grid>
                            </Grid>
                        </ListItem>
                        {listByCases !== null ? listByCases.slice(0, 25).map(({ cases, country, countryInfo, todayCases }, index) => {
                            return (
                                <ListItem key={countryInfo}>
                                    <Grid container justify="space-between">
                                        <Grid item xs={1}><Typography variant="h3">{index + 1}</Typography></Grid>
                                        <Grid item xs><img src={countryInfo.flag} alt="" style={{ width: '40px', height: '30px' }} /></Grid>
                                        <Grid item xs><Typography variant="h3">{country}</Typography></Grid>
                                        <Grid item xs><Typography variant="h3">{cases}</Typography><Typography variant="h4" color='error'>+{todayCases}</Typography></Grid>
                                    </Grid>

                                </ListItem>
                            )
                        }) : <Typography variant="h2">Loading...</Typography>}
                    </List>
                </Grid>
                <Grid item xs={12} md={4}>
                    <List>
                        <ListItem>
                            <Grid container justify="space-between">
                                <Grid item xs={12}><Typography variant="h2" gutterBottom>Sort by Deaths</Typography></Grid>
                                <Grid item xs={1}><Typography variant="h3">Rank</Typography></Grid>
                                <Grid item xs></Grid>
                                <Grid item xs><Typography variant="h3">country</Typography></Grid>
                                <Grid item xs><Typography variant="h3">deaths</Typography></Grid>
                            </Grid>
                        </ListItem>
                        {listByDeaths !== null ? listByDeaths.slice(0, 25).map(({ country, countryInfo, deaths, todayDeaths }, index) => {
                            return (
                                <ListItem key={countryInfo}>
                                    <Grid container justify="space-between">
                                        <Grid item xs={1}><Typography variant="h3">{index + 1}</Typography></Grid>
                                        <Grid item xs><img src={countryInfo.flag} alt="" style={{ width: '40px', height: '30px' }} /></Grid>
                                        <Grid item xs><Typography variant="h3">{country}</Typography></Grid>
                                        <Grid item xs><Typography variant="h3">{deaths}</Typography><Typography variant="h4" color='error'>+{todayDeaths}</Typography></Grid>
                                    </Grid>
                                </ListItem>
                            )
                        }) : <Typography variant="h2">Loading...</Typography>}
                    </List>
                </Grid>
                <Grid item xs={12} md={4}>
                    <List>
                        <ListItem>
                            <Grid container justify="space-between">
                                <Grid item xs={12} ><Typography variant="h2" gutterBottom>Sort by Recovered</Typography></Grid>
                                <Grid item xs={1}><Typography variant="h3">Rank</Typography></Grid>
                                <Grid item xs></Grid>
                                <Grid item xs><Typography variant="h3">country</Typography></Grid>
                                <Grid item xs><Typography variant="h3">recovered</Typography></Grid>
                            </Grid>
                        </ListItem>
                        {listByRecovered !== null ? listByRecovered.slice(0, 25).map(({ country, countryInfo, recovered }, index) => {
                            return (
                                <ListItem key={countryInfo}>
                                    <Grid container justify="space-between">
                                        <Grid item xs={1}><Typography variant="h3">{index + 1}</Typography></Grid>
                                        <Grid item xs><img src={countryInfo.flag} alt="" style={{ width: '40px', height: '30px' }} /></Grid>
                                        <Grid item xs><Typography variant="h3">{country}</Typography></Grid>
                                        <Grid item xs><Typography variant="h3" style={{marginBottom: '16px'}}>{recovered}</Typography></Grid>
                                    </Grid>
                                </ListItem>
                            )
                        }) : <Typography variant="h2">Loading...</Typography>}
                    </List>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default CaseList