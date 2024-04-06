import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../../constants";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurantList = async () => {
    const res = await fetch(RESTAURANT_URL);

    const data = await res.json();

    console.log({ data });

    setRestaurantList(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  console.log({ restaurantList });

  if (restaurantList?.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <h1>Home</h1>

      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {restaurantList.map((restaurant) => (
            <li>
              <Link to={`/restaurant/${restaurant.info.id}`}>
                <RestaurantCard details={restaurant.info} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
