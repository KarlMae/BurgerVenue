import './styles.scss';
import '../../styles/animations.scss'
import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Gallery(props) {
    const {selectedVenue, venueImages, selectVenue, isLoading} = props;

    const sortSelectedElementToFirstPosition = (image, _) => {
        if (!selectedVenue) {
            return 0;
        }

        return image.venueId === selectedVenue.id ? -1 : 1;
    };

    return (
        <div className="gallery">
            {isLoading && <LoadingSpinner/>}
            {!isLoading &&
            <div className="gallery__grid">
                {venueImages.sort(sortSelectedElementToFirstPosition).map((venueImage) =>
                    <div
                        key={venueImage.venueId}
                        onClick={() => selectVenue(venueImage.venueId)}
                        style={{background: `url(${venueImage.path}) center/cover`}}
                        className={`
                            ${selectedVenue?.id === venueImage.venueId && 'gallery__image--selected'} 
                            gallery__image fade-in
                        `}
                    />
                )}
            </div>
            }
        </div>
    );
}

export default Gallery;
