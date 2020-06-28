import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../util/Yelp.js';

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

var arr = [
  businessPlaceholder,
  businessPlaceholder
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    console.log(`Request for ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then(
      (businesses) => {
        this.setState({businesses: businesses});
      },
      (err) => {
        console.log(err);
      }
    )};

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@1,400;1,700&display=swap" rel="stylesheet"></link>
        <h1>Trekker</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {/* Call Yelp API to retrieve data and then pass into array*/}
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
