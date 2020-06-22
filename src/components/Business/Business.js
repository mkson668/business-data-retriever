import React from 'react';
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
                <div className="image-wrapper">
                    <img className="image-in-wrapper" src={this.props.businessData.imageSrc} alt='' />
                </div>
                <h2>{this.props.businessData.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.businessData.address}</p>
                        <p>{this.props.businessData.city}</p>
                        <p>{this.props.businessData.state}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.businessData.category}</h3>
                        <h3 className="rating">{this.props.businessData.rating + ' stars'}</h3>
                        <p>{this.props.businessData.reviewCount + ' reviews'}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;