import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { useApi } from '../Api/useApi';


const useStyles = makeStyles((theme) => ({
    contentText: {
        margin: theme.spacing(4),
    },
    lineTopMargin: {
        marginTop: theme.spacing(2)
    }
}))

function Content() {
    const classes = useStyles();
    const { cases, todayCases, todayDeaths, deaths, recovered, tests } = useApi('/all', []);
    // console.log(all);
    return (
        <div className={classes.contentText}>
            <Box fontWeight="700" component="div">
                Coronavirus Cases:
                <div>
                    {cases}
                </div>
            </Box>
            <Box fontWeight="700" component="div" className={classes.lineTopMargin}>
                Today Cases:
                <div>
                    {todayCases}
                </div>
            </Box>
            <Box fontWeight="700" component="div" className={classes.lineTopMargin}>
                Deaths:
                <div>
                    {deaths}
                </div>
            </Box>
            <Box fontWeight="700" component="div" className={classes.lineTopMargin}>
                Today Deaths:
                <div>
                    {todayDeaths}
                </div>
            </Box>
            <Box fontWeight="700" component="div" className={classes.lineTopMargin}>
                Recovered:
                <div>
                    {recovered}
                </div>
            </Box>
            <Box fontWeight="700" component="div" className={classes.lineTopMargin}>
                Tests:
                <div>
                    {tests}
                </div>
            </Box>
            {/* </Typography> */}
        </div>
    )
}

export default Content