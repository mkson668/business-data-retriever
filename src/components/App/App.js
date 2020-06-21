import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';

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

var businessArray = [
  businessPlaceholder,
  businessPlaceholder,
  businessPlaceholder,
  businessPlaceholder,
  businessPlaceholder,
  businessPlaceholder
];

function App() {
  return (
    <div className="App">
        <h1>Trekker</h1>
    <SearchBar/>
    {/* Call Yelp API to retrieve data and then pass into array*/}
    <BusinessList businsses={businessArray}/>
    </div>
  );
}

export default App;
