import './styles.scss';
import React from "react";
import {Circle, GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import {coordinates} from "../../constants/coordinates";
import InfoWindowContent from "../InfoWindowContent/InfoWindowContent";

function MapContainer(props) {
    const {google, venues, selectedVenue, selectVenue} = props;

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%'
    };

    return (
        <Map
            containerStyle={containerStyle}
            google={google}
            initialCenter={coordinates.tartuCoordinates}
            zoom={12}
            className='map'
        >
            <Circle
                center={coordinates.tartuBusStationCoordinates}
                radius={1000}
            />
            {venues.map(venue =>
                <Marker
                    key={venue.id}
                    position={{lat: venue.location.lat, lng: venue.location.lng}}
                    onClick={() => selectVenue(venue.id)}
                />
            )}
            <InfoWindow
                visible={true}
                position={selectedVenue?.location}
                onClose={() => selectVenue(undefined)}
            >
                <InfoWindowContent header={selectedVenue?.name} text={selectedVenue?.location.address}/>
            </InfoWindow>
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAdP5Yi4SHAFqk1eW6vlinCaVWRgdsQeDw'
})(MapContainer);
