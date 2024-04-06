import React from "react";
import { RatingSvg } from "../../assets/icons";

const RestaurantCard = ({ details }) => {
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

export const withOffer = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative group">
        <p className="absolute pb-4 bottom-24 left-3 text-white font-extrabold text-xl z-20 group-hover:scale-95 hover:scale-95 transition-transform origin-top">
          {`${props.details.aggregatedDiscountInfoV3?.header} ${props.details.aggregatedDiscountInfoV3?.subHeader}`}{" "}
          Check
        </p>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
