import React from 'react';
import './SearchBar.css';

/* https://www.yelp.com/developers/documentation/v3/business_search */
const sortByObjects = {
    'Best Match':'best_match',
    'Highest Rated':'rating',
    'Most Reviewed':'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        var sortKeys = Object.keys(sortByObjects);
        return sortKeys.map((key) => {
            // get values of object by calling each key;
            let sortValue = sortByObjects[key];
            return (
                <li key={sortValue}>key</li>
            );
        });
    };
}

export default SearchBar;