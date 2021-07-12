const assert = require('assert');

Feature('Liking Restorant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('Anda Belum Menambahkan Restaurant Favorite Anda', '.empty-state-container .empty-state');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Anda Belum Menambahkan Restaurant Favorite Anda', '.empty-state-container .empty-state');

  I.amOnPage('/');

  I.seeElement('.restaurant-item-title a');

  const firstRestaurant = locate('.restaurant-item-title a').first();

  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
