import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="Business">
                {/*prop of array of businesses called with map() to construct individual
                Business components that further propagate data to Business class */}
                {(this.props.businesses).map((business) => {
                    return (
                        // note that list html items in React need a unique key for virtual DOM to work
                        <Business businessData={business} key={business.id}/>
                    );
                })}
            </div>
        );
    }
}

export default BusinessList;