import React from "react";
import { CLOUDINARY_IMAGE_URL } from "../../constants";
import { LuStar } from "react-icons/lu";

const Dish = ({ details }) => {
  const { defaultPrice, description, name, price, ratings, imageId } = details;

  return (
    <div className="flex items-start justify-between py-4 pb-6 gap-4">
      <div>
        <p className="font-semibold">{name}</p>

        <p className="font-medium">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </p>

        {ratings?.aggregatedRating?.rating && (
          <p className="text-sm text-gray-500 flex gap-1 font-semibold">
            <span className="text-green-600  flex items-center gap-1">
              <LuStar fill="green" />
              {ratings?.aggregatedRating?.rating}
            </span>{" "}
            ({ratings?.aggregatedRating?.ratingCountV2})
          </p>
        )}

        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>

      <div className="w-32 h-32 flex-shrink-0 relative">
        <img
          src={CLOUDINARY_IMAGE_URL + imageId}
          alt={name}
          className="object-cover rounded-lg aspect-square w-32 h-32 "
        />

        <button className="absolute -bottom-2 left-[50%] -trangray-x-[50%] z-10  w-3/4  bg-white shadow-md py-1 px-3 rounded-md font-bold text-green-600 hover:bg-gray-200 transition-colors">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Dish;
