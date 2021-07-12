import FavoriteButtonInitiator from '../../src/scripts/utils/favoriteButton-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriteResto-idb';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('.favoriteButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
