Feature('Unliking Restorant');

Before(async ({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing a favorited restaurant', ({ I }) => {
  I.seeElement('.restaurant-item');
});

Scenario('unliking the restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item');

  I.seeElement('.restaurant-item-title a');
  I.click(locate('.restaurant-item-title a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('Anda Belum Menambahkan Restaurant Favorite Anda', '.empty-state-container .empty-state');
  pause();
});
