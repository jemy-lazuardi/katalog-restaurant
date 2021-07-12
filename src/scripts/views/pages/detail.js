import UrlParser from '../../routes/url-parser';
import TheRestaurantDb from '../../data/TheRestaurantDb-Source';
import {
  createRestaurantDetailTemplate,
  createReviewsTemplate,
} from '../templates/tempalate-creator';
import FavoriteButtonInitiator from '../../utils/favoriteButton-initiator';
import FavoriteRestaurantIdb from '../../data/favoriteResto-idb';

import '../../components/RestaurantDetail';

const Detail = {
  async render() {
    const restaurantDetailElement = '<restaurant-detail></restaurant-detail>';
    return restaurantDetailElement;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantList = await TheRestaurantDb.detailRestaurant(url.id);
    const { restaurant } = restaurantList;
    const { categories, menus, customerReviews } = restaurant;

    const restaurantDetailContainer = document.querySelector('.restaurant-detail-body');
    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const restaurantCategoriesContainer = document.querySelector('.restaurant-detail-categories');
    categories.forEach((categorie) => {
      restaurantCategoriesContainer.innerHTML += `<span>${categorie.name}</span>`;
    });

    const restaurantFoodContainer = document.querySelector('.restaurant-food-menus');
    menus.foods.forEach((food) => {
      restaurantFoodContainer.innerHTML += `<li>${food.name}</li>`;
    });

    const restaurantDrinkContainer = document.querySelector('.restaurant-drink-menus');
    menus.drinks.forEach((drink) => {
      restaurantDrinkContainer.innerHTML += `<li>${drink.name}</li>`;
    });

    const restaurantReviewsContainer = document.querySelector('.restaurant-reviews');
    customerReviews.forEach((review) => {
      restaurantReviewsContainer.innerHTML += createReviewsTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('.favoriteButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default Detail;
