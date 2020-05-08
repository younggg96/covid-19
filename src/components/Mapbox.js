import React, { useState, useRef, useEffect } from 'react'
import { Grid, Hidden, Typography, Box } from '@material-ui/core';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useApi } from '../Api/useApi';

const styles = {
    width: "90vw",
    height: "50vh"
};

const getColorCount = cases => {
    if (cases >= 50000) return "red"
    if (cases >= 20000 && cases < 50000) return "blue"
    if (cases < 20000) return "gray"
}

function Mapbox() {
    const listByCases = useApi('/countries?sort=cases', null)
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null)
    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoieWFuZ2dnOTYiLCJhIjoiY2s5a3VsbmkyMXl5eTNubzE1Mnl5emcyaSJ9.1M2DwOkiua7Pl2V_V8ma_A';
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
                center: [-77.38, 39], // starting position
                zoom: 1.5 // starting zoom
            });
            map.on("load", () => {
                setMap(map)
                map.resize();
            })
        };
        if (listByCases) {
            listByCases.forEach(({ country, cases, deaths, recovered, countryInfo }, index) => {
                const description = `
                    <strong>${country}</strong>
                    <p>Cases: ${cases}</p>
                    <p>Deaths: ${deaths}</p>
                    <p>Decovered: ${recovered}</p>
                `;
                if (cases >= 3000) {
                    new mapboxgl.Marker({
                        color: getColorCount(cases)
                    })
                        .setLngLat([countryInfo.long, countryInfo.lat])
                        .addTo(map);
                    map.on('mouseenter', 'places', function () {
                        map.getCanvas().style.cursor = 'pointer';
                        popup
                            .setHTML(description)
                            .addTo(map)
                    })
                }
            });
        }

        if (!map) initializeMap({ setMap, mapContainer });

    }, [map])

    return <div ref={el => (mapContainer.current = el)} style={styles} />

}


const MapboxGLMap = (props) => {

    return (
        <Hidden smDown>
            <Typography variant="h2" gutterBottom style={{ paddingLeft: "32px" }}>
                <Box fontWeight={300}>
                    - Cases World Map -
                </Box>
            </Typography>
            <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Mapbox />
                </Grid>
            </Grid>
        </Hidden>
    )
}


export default MapboxGLMap