export default function Restaurants() {
  const restaurants = [
    {
      name: "McDonald's",
      cuisine: "Fast Food",
      location: "Downtown",
      rating: 4.5,
    },
    {
      name: "Pizza Hut",
      cuisine: "Pizza",
      location: "Downtown",
      rating: 4.0,
    },
    {
      name: "Subway",
      cuisine: "Sandwiches",
      location: "Downtown",
      rating: 4.0,
    },
    {
        name: "KFC",
        cuisine: "Fast Food",
        location: "Downtown",
        rating: 4.0,
    },
    {
        name: "Burger King",
        cuisine: "Fast Food",
        location: "Downtown",
        rating: 4.0,
    }
  ];
  return (
    <div id="restaurants">
      {restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-card">
          <h2>{restaurant.name}</h2>
          <p>Cuisine: {restaurant.cuisine}</p>
          <p>Location: {restaurant.location}</p>
          <p>Rating: {restaurant.rating}</p>
        </div>
      ))}
    </div>
  );
}
