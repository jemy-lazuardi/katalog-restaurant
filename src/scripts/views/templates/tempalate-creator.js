import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <article class="restaurant-detail-content">
        <div class="restaurant-detail-image">
                <img class="restaurant-detail-thumbnail" src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}` : 'https://alppetro.co.id/dist/assets/images/default.jpg'}" alt="${restaurant.name}">
                <label class="restaurant-detail-city">${restaurant.city}</label>
        </div>
        <div>
            <h1 class="restaurant-detail-title">${restaurant.name}</h1>
            <p class="restaurant-detail-address">${restaurant.address}</p>
            <p class="restaurant-detail-description">${restaurant.description}</p>
            <label class="restaurant-detail-rating">Rating : ${restaurant.rating}</label>
        </div>
    </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <div class="restaurant-item-image">
          <img class="restaurant-item-thumbnail lazyload" data-src="${restaurant.pictureId ? `${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}` : 'https://alppetro.co.id/dist/assets/images/default.jpg'}" alt="${restaurant.name}">
          <label class="restaurant-item-city">${restaurant.city}</label>
        </div>
        <div class="restaurant-item-content">
          <h1 class="restaurant-item-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
          <p class="restaurant-item-description">${restaurant.description}</p>
          <label class="restaurant-item-rating">Rating : ${restaurant.rating}</label>
        </div>
    </article>
`;

const createReviewsTemplate = (review) => `
    <div class="review">
        <p>&ldquo;${review.review}&rdquo;</p>
        <div class="review-name">-${review.name}</div>
    </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this resto" id="favoriteButton" class="fab">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="favoriteButton" class="fab">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmptyStateRestaurant = () => `
  <div class="empty-state">
    Anda Belum Menambahkan Restaurant Favorite Anda
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createReviewsTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createEmptyStateRestaurant,
};
