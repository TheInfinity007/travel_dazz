import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Topography, useMediaQuery, Rating } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import useStyles from './styles';

// AIZaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHUo

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIZaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHUo',
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                // onChange={''}
                // onChildClick={''}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
