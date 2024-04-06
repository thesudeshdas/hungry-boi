import React from "react";
import { RatingSvg } from "../../assets/icons";

const RestaurantCard = ({ details }) => {
  console.log({ details });

  const {
    aggregatedDiscountInfoV3,
    areaName,
    avgRatingString,
    cloudinaryImageId,
    cuisines,
    name,
    sla,
  } = details;

  return (
    <div className="cursor-pointer hover:scale-95 transition-transform">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          className="w-full object-cover aspect-16/10 "
        />

        <div className="absolute h-32 w-full bottom-0 left-0 z-10 bg-gradient-to-t from-black to-transparent" />

        {aggregatedDiscountInfoV3 && (
          <p className="absolute bottom-0 left-0 pb-2 px-3 font-extrabold text-xl text-white z-20">
            {`${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}
          </p>
        )}
      </div>

      <div className="p-2">
        <h3 className="font-semibold  text-gray-800">{name}</h3>

        <p className="font-semibold flex gap-1">
          <RatingSvg />
          {avgRatingString} • {sla.slaString}
        </p>

        <p className="text-sm text-gray-600 line-clamp-1">
          {cuisines?.join(", ")}
        </p>

        <p className="text-sm text-gray-600 line-clamp-1">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
