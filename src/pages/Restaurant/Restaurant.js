import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../../constants";

const Restaurant = () => {
  const { restaurantId } = useParams();

  console.log({ restaurantId });

  const fetchRestaurantMenu = async () => {
    const res = await fetch(RESTAURANT_MENU_URL + restaurantId);

    const data = await res.json();

    console.log({ data });
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  return <div>Restaurant</div>;
};

export default Restaurant;
