import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../../constants";
import RestaurantCategory from "../../components/RestaurantCategory/RestaurantCategory";

const Restaurant = () => {
  const { restaurantId } = useParams();

  const [restaurantMenu, setRestaurantMenu] = useState();
  const [showDishes, setShowDishes] = useState(1);

  const fetchRestaurantMenu = async () => {
    const res = await fetch(RESTAURANT_MENU_URL + restaurantId);

    const data = await res.json();

    console.log({ data });

    setRestaurantMenu(data.data);
  };

  const toggleDishes = (index) => {
    setShowDishes((prevIndex) => (index === prevIndex ? null : index));
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const categories =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log({ categories });

  return (
    <main className="max-w-[1000px] mx-auto">
      <h3>{restaurantMenu?.cards[0]?.card?.card?.text}</h3>

      <div className="flex flex-col gap-4">
        {categories?.map((category, index) => (
          <RestaurantCategory
            category={category?.card?.card}
            showDishes={showDishes === index}
            toggleDishes={() => toggleDishes(index)}
          />
        ))}
      </div>
    </main>
  );
};

export default Restaurant;
