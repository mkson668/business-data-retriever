import React from 'react';
import './Business.css';

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