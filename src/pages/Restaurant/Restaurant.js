import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../../constants";

const Restaurant = () => {
  const { restaurantId } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState();

  const fetchRestaurantMenu = async () => {
    const res = await fetch(RESTAURANT_MENU_URL + restaurantId);

    const data = await res.json();
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  return (
    <main>
      <h3>{data?.data?.cards[0]?.card?.card?.text}</h3>
    </main>
  );
};

export default Restaurant;
