import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

import Dish from "../Dish/Dish";

const RestaurantCategory = ({ category, showDishes, toggleDishes }) => {
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated((prevState) => !prevState);
  };

  return (
    <div className="outline-2 w-full rounded-md shadow-md overflow-hidden">
      <div
        className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer"
        onClick={() => {
          toggleRotation();
          toggleDishes();
        }}
      >
        <h4 className="font-bold">
          {category?.title} ({category?.itemCards?.length}){" "}
        </h4>

        <LuChevronDown
          className={`transform ${isRotated ? "rotate-180" : ""}`}
          style={{ transition: "transform 0.3s" }}
        />
      </div>

      {showDishes && (
        <ul className="divide-y-2 p-4">
          {category?.itemCards?.map((item) => (
            <Dish details={item?.card?.info} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
