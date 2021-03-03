import './styles.scss';

import {coordinates} from "../constants/coordinates";
import {checkIfCoordinateWithinDistance} from "../helpers/coordinateHelper";
import MapContainer from "../components/Map/MapContainer";
import React, {useEffect, useState} from "react";
import Gallery from "../components/Gallery/Gallery";
import {services} from "../services/fourSquare.service";
import Header from "../components/Header/Header";

function FrontPage() {
    const [venues, setVenues] = useState([]);
    const [venueImages, setVenueImages] = useState([]);
    const [selectedVenue, setSelectedVenue] = useState(undefined);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async (venues) => {
            const venueImages = [];

            for (const [i, venue] of venues.entries()) {
                const images = ['https://picsum.photos/id/' + i + '/200/300']//await services.fetchVenuePhotos(venue.id);
                if (images.length) {
                    const image = images[0]
                    venueImages.push({
                        venueId: venue.id,
                        path: image //image.prefix + '500x500' + image.suffix
                    });
                }
            }

            setVenueImages(venueImages);
        }

        const fetchData = async () => {
            let venues = await services.fetchBurgerVenues();
            venues = venues.filter(venue => checkIfCoordinateWithinDistance(
                venue.location, coordinates.tartuBusStationCoordinates, 1
            ))

            setVenues(venues);
            await fetchImages(venues);
            setLoading(false);
        }

        fetchData();
    }, []);

    const selectVenue = (venueId) => {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        )
        setSelectedVenue(venues.find(venue => venue.id === venueId));
    }

    return (
        <div className='front-page'>
            <Header
                isLoading={isLoading}
            />
            <MapContainer
                venues={venues}
                selectedVenue={selectedVenue}
                selectVenue={selectVenue}
            />
            <Gallery
                venueImages={venueImages}
                selectedVenue={selectedVenue}
                selectVenue={selectVenue}
                isLoading={isLoading}
            />
        </div>
    );
}

export default FrontPage;
