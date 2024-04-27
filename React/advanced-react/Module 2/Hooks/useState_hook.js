import { useState } from "react";

// export default function App() {
//     const restaurantName = useState("Lemon");
//     console.log(restaurantName);
//     return null;
// };

export default function App() {
  const [restaurantName, setRestaurantName] = useState("Lemon");

  function updateRestaurantName(){
    setRestaurantName("Little Lemon")
  };
  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>
        Update reastaurant name
      </button>
    </div>
    
  );
};