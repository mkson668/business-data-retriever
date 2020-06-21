import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="Business">
                {/*prop of array of businesses called with map() to construct individual
                Business components that further propagate data to Business class */}
                {(this.props.businsses).map((business) => {
                    return (
                        <Business businessData={business}/>
                    );
                })}
            </div>
        );
    }
}

export default BusinessList;