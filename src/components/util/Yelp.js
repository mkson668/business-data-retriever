import picture from "./Resources/no_pictures.png";

const apiKey = 'yDdcvhR_Le-fJ5fdJAtihvgjqEdYHquq2NLxwrmXjBAewTGBjqyO4C29AvJZOuEHm94rLt8iFdENLXSzkFoSMLFPbYvZMW4WBf94EO5epmCcONAujs_JkjjUilHtXnYx';
var Yelp = {
    // don't use arrow functions in object because 'this' context is sifferent
    search: function(term, location, sortBy) {
        let corsProxy = 'https://cors-anywhere.herokuapp.com/';
        let endpoint = corsProxy + `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            // on success
            if (response.ok) {
                return response.json();
            }
            throw new Error('fetch error #0');
        },
        // on fail
        (err) => {
            console.log('fetch error #1: ' + err.message);
        }).then((jsonResponse) => {
            if ('businesses' in jsonResponse) {
                return jsonResponse.businesses.map((business) => {
                    let filteredBusiness = {
                        id: business.id,
                        imageSrc: business.image_url || picture,
                        name: business.name || 'not available',
                        address: business.location.address1 || business.location.address2 || 'not available',
                        city: business.location.city || 'not available',
                        state: business.location.state || 'not available',
                        zipCode: business.location.zip_code || 'not available',
                        category:  business.categories[0].alias || 'not available',
                        rating: business.rating || 'not available',
                        reviewCount: business.review_count || 'not available'
                    }
                    return filteredBusiness;
                });
            }
        },
        (err) => {
            console.log('fetch error #2: jsonResponse error');
        });
    }
};

export default Yelp;
