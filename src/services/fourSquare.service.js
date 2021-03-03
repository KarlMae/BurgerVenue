import axios from "axios";
import {addFourSquareCredentialInterceptor, addFourSquareVersionInterceptor} from "../interceptors/authInterceptor";

addFourSquareCredentialInterceptor();
addFourSquareVersionInterceptor();

const baseUrl = 'https://api.foursquare.com';

export const services = {
    fetchBurgerVenues: async () => {
        const response = await axios.get(
            `${baseUrl}/v2/venues/search?ll=58.3730018,26.7125123&categoryId=4bf58dd8d48988d16c941735`
        );

        return response.data.response.venues;
    },
    fetchVenuePhotos: async (venueId) => {
        const response = await axios.get(`${baseUrl}/v2/venues/${venueId}/photos?`);
        return response.data.response.photos.items;
    }
}
