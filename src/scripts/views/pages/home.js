import TheRestaurantDb from '../../data/TheRestaurantDb-Source';
import { createRestaurantItemTemplate } from '../templates/tempalate-creator';

import '../../components/Hero';
import '../../components/RestaurantList';

const Home = {
  async render() {
    const heroElement = '<hero-banner></hero-banner>';
    const restaurantListElement = '<restaurant-list></restaurant-list>';
    return [heroElement, restaurantListElement];
  },

  async afterRender() {
    const restaurants = await TheRestaurantDb.listRestaurant();
    const restaurantsContainer = document.querySelector('.restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
