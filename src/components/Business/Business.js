import React from 'react';
import ReactDOM from 'react-dom';
import './Business.css';

// temporary place holder for all Business venues
var businessPlaceholder = {
    imageSrc: 'https://ep1.pinkbike.org/files/logo/directory/11000/11019_original.jpg',
    name: 'Bicicletta',
    address: '233 West Broadway',
    city: 'Vancouver',
    state: 'BC',
    zipCode: 'V5Y 1P5',
    category: 'Bike shop',
    rating: 4.5,
    reviewCount: 90
};

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={businessPlaceholder.imageSrc} alt='' />
                </div>
                <h2>{businessPlaceholder.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{businessPlaceholder.address}</p>
                        <p>{businessPlaceholder.city}</p>
                        <p>{businessPlaceholder.state}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{businessPlaceholder.category}</h3>
                        <h3 className="rating">{businessPlaceholder.rating + 'stars'}</h3>
                        <p>{businessPlaceholder.reviewCount + 'reviews'}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;