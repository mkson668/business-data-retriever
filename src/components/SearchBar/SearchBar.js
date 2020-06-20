import React from 'react';
import './SearchBar.css';

/* https://www.yelp.com/developers/documentation/v3/business_search */
const sortByObjects = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        var sortKeys = Object.keys(sortByObjects);
        /* recall that the key attribute acts as a unique identifier for the list item such that
        ReactDOM knows what has changed and to only render the new part */
        return sortKeys.map((key) => {
            // get values of object by calling each key;
            let sortValue = sortByObjects[key];
            return (
                <li key={sortValue}>{key}</li>
            );
        });
    };
    // the href is anchor is temporary workaround to stop errors
    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a href="https://github.com/Yelp/yelp-fusion/issues/399">Let's Go</a>
            </div>
        </div>
        );
    }
}

export default SearchBar;