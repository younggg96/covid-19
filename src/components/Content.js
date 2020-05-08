import React from 'react'
import { Box, makeStyles, Typography, Grid } from '@material-ui/core'
import { useApi } from '../Api/useApi';
import { red, grey, indigo, blue } from '@material-ui/core/colors';
import headerImg from '../assets/imgs/CoronaVirusHeader.jpg'


const useStyles = makeStyles((theme) => ({
    img: {
        width: "100%"
    },
    contentText: {
        margin: theme.spacing(4),
    },
    lineTopMargin: {
        marginTop: theme.spacing(2)
    },
}))

const boxProps = {
    component: "div",
    border: 1,
    textAlign: "center",
    borderRadius: 6,
    style: { padding: "16px", height: "140px" }
}


function Content() {
    const classes = useStyles();
    const { cases, todayCases, todayDeaths, deaths, recovered, tests } = useApi('/all', []);
    return (
        <React.Fragment>
            <img src={headerImg} alt="" className={classes.img}/>
            <div className={classes.contentText}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Box borderColor="error.main" {...boxProps}>
                            <Typography variant="h3" gutterBottom>
                                <Box fontWeight="100" color={red[500]}>
                                    Global Confirmed
                            </Box>
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                <Box fontWeight="100" color={red[500]}>
                                    +new {todayCases}
                                </Box>
                            </Typography>
                            <Typography variant="h1" gutterBottom>
                                <Box fontWeight="500" color={red[500]}>
                                    {cases}
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box borderColor={grey[100]} {...boxProps}>
                            <Typography variant="h3" gutterBottom>
                                <Box fontWeight="100" color={grey[300]}>
                                    Global Deaths
                            </Box>
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                <Box fontWeight="100" color={grey[300]}>
                                    +new {todayDeaths}
                                </Box>
                            </Typography>
                            <Typography variant="h1" gutterBottom>
                                <Box fontWeight="100" color={grey[300]}>
                                    {deaths}
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box borderColor={blue[100]} {...boxProps}>
                            <Typography variant="h3" gutterBottom style={{marginBottom: "26px"}}>
                                <Box fontWeight="100" color={blue[200]}>
                                    Total Recovered:
                                </Box>
                            </Typography>
                            <Typography variant="h1" gutterBottom>
                                <Box fontWeight="100" color={blue[200]}>
                                    {recovered}
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box borderColor={indigo[100]} {...boxProps}>
                            <Typography variant="h3" gutterBottom style={{ marginBottom: "26px" }}>
                                <Box fontWeight="100" color={indigo[100]}>
                                    Total Test:
                            </Box>
                            </Typography>
                            <Typography variant="h1" gutterBottom>
                                <Box fontWeight="100" color={indigo[100]}>
                                    {tests}
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default Content