import React, { useState, useRef, useEffect } from 'react'
import { Grid, Hidden, Typography, Box } from '@material-ui/core';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useApi } from '../Api/useApi';
import marker from '../assets/marker/marker.png'

const styles = {
    width: "90vw",
    height: "50vh",
    color: "black"
};

const getColorCount = cases => {
    if (cases >= 50000) return "red"
    if (cases >= 20000 && cases < 50000) return "blue"
    if (cases <= 20000 && cases > 5000) return "green"
    if (cases <= 5000) return "gray"
}

const fatchData = listByCases => {
    const data = []
    if (listByCases) {
        console.log(listByCases)
        listByCases.slice(0, 90).forEach(({ country, cases, deaths, recovered, countryInfo }, index) => {
            const { long, lat, flag } = countryInfo
            data.push({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [long, lat]
                },
                properties: {
                    index,
                    description:
                        `<div style="text-align: center">
                        <img src=${flag} width="80vw" alt=""/>
                        <h1>${country}</h1>
                        <h3>Infected: <strong>${cases}</strong></h3>
                        <h3>Deaths: <strong>${deaths}</strong></h3>
                        <h3>Recovered: <strong>${recovered}</strong></h3>
                        </div>
                        `,
                    cases: cases,
                    icon: marker
                }
            })
        })
    }
    return Promise.resolve({
        type: 'geojson',
        data: {
            type: "FeatureCollection",
            features: data
        }
    })
}

function Mapbox() {
    const listByCases = useApi('/countries?sort=cases', null)
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null)
    const hasData = Array.isArray(listByCases) && listByCases.length > 0
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoieWFuZ2dnOTYiLCJhIjoiY2s5a3VsbmkyMXl5eTNubzE1Mnl5emcyaSJ9.1M2DwOkiua7Pl2V_V8ma_A';
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
                center: [-77.38, 39], // starting position
                zoom: 1.5 // starting zoom
            });
            if (hasData) {
                map.on("load", async () => {
                    const res = await fatchData(listByCases)
                    const { data } = res;
                    const { features } = data;
                    setMap(map)
                    map.resize();
                    features.forEach(({ geometry, properties }) => {
                        const {cases} = properties
                        var popup = new mapboxgl.Popup({ offset: 15, closeButton: false, closeOnClick: true })
                            .setHTML(properties.description)
                            .setMaxWidth("20vw")
                        new mapboxgl.Marker({ color: getColorCount(cases) })
                            .setLngLat(geometry.coordinates)
                            .setPopup(popup)
                            .addTo(map);
                    })
                });
            }

        };
        if (!map) initializeMap({ setMap, mapContainer });

    }, [map, hasData, listByCases])
    if (hasData) {
        return <div ref={el => (mapContainer.current = el)} style={styles} />
    }

    return (<div ref={el => (mapContainer.current = el)} style={styles}>
        <Typography variant="h2" color="white" style={{ paddingLeft: "32px", textAlign: "center" }}>
            <Box fontWeight={300}>
                Loading...
            </Box>
        </Typography>
        </div>)

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