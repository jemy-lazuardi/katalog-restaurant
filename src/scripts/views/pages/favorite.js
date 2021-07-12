import FavoriteRestaurantIdb from '../../data/favoriteResto-idb';
import { createRestaurantItemTemplate, createEmptyStateRestaurant } from '../templates/tempalate-creator';

import '../../components/FavoritesList';

const Favorite = {
  async render() {
    const restaurantFavoritesElement = '<restaurant-favorites></restaurant-favorites>';
    return restaurantFavoritesElement;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.restaurants');
    const emptyStateContainer = document.querySelector('.empty-state-container');
    if (restaurants.length !== 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      emptyStateContainer.innerHTML = createEmptyStateRestaurant();
    }
  },
};

export default Favorite;
