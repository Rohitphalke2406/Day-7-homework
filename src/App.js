import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';

const restaurantsData = [
  { id: 1, name: 'Restaurant A', cuisine: 'Italian', location: 'City A', rating: 4.5 },
  { id: 2, name: 'Restaurant B', cuisine: 'Mexican', location: 'City B', rating: 4.2 },
  { id: 3, name: 'Restaurant C', cuisine: 'Japanese', location: 'City C', rating: 4.7 },
  { id: 4, name: 'Restaurant D', cuisine: 'Indian', location: 'City D', rating: 4.0 },
  { id: 5, name: 'Restaurant E', cuisine: 'Chinese', location: 'City E', rating: 4.3 },
  { id: 6, name: 'Restaurant F', cuisine: 'French', location: 'City F', rating: 4.6 },
  { id: 7, name: 'Restaurant G', cuisine: 'Thai', location: 'City G', rating: 4.4 },
  { id: 8, name: 'Restaurant H', cuisine: 'American', location: 'City H', rating: 4.8 },
  { id: 9, name: 'Restaurant I', cuisine: 'Mediterranean', location: 'City I', rating: 4.1 },
  { id: 10, name: 'Restaurant J', cuisine: 'Korean', location: 'City J', rating: 4.9 },
  { id: 11, name: 'Restaurant K', cuisine: 'Greek', location: 'City K', rating: 4.2 },
  { id: 12, name: 'Restaurant L', cuisine: 'Vietnamese', location: 'City L', rating: 4.6 },
  { id: 13, name: 'Restaurant M', cuisine: 'Spanish', location: 'City M', rating: 4.3 },
  { id: 14, name: 'Restaurant N', cuisine: 'Brazilian', location: 'City N', rating: 4.7 },
  { id: 15, name: 'Restaurant O', cuisine: 'Lebanese', location: 'City O', rating: 4.0 },
  { id: 16, name: 'Restaurant P', cuisine: 'Turkish', location: 'City P', rating: 4.5 },
  { id: 17, name: 'Restaurant Q', cuisine: 'Russian', location: 'City Q', rating: 4.2 },
  { id: 18, name: 'Restaurant R', cuisine: 'Peruvian', location: 'City R', rating: 4.8 },
  { id: 19, name: 'Restaurant S', cuisine: 'Caribbean', location: 'City S', rating: 4.4 },
  { id: 20, name: 'Restaurant T', cuisine: 'Ethiopian', location: 'City T', rating: 4.6 },
];

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">

      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.cuisine} - {restaurant.location} - Rating: {restaurant.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FilterRestaurants = ({ onFilter }) => {
  const [cuisine, setCuisine] = useState('');

  const handleInputChange = (e) => {
    setCuisine(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="filter-restaurants">
      <input type="text" placeholder="Search by cuisine..." value={cuisine} onChange={handleInputChange} />
    </div>
  );
};

const App = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);

  const handleFilter = (cuisine) => {
    const filtered = restaurantsData.filter((restaurant) =>
      restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="app">
      <Navbar />
      <FilterRestaurants onFilter={handleFilter} />
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
};

export default App;
