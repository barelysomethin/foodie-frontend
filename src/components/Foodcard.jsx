import React from 'react';

function FoodCard() {
  return (
    <div className="food-card">
      <img src="path_to_food_image" alt="Food" className="food-image" />
      <h2>Fried Shrimp</h2>
      <p>Rating: 4.8 (163)</p>
      <p>Preparation time: 20 min</p>
    </div>
  );
}

export default FoodCard;
