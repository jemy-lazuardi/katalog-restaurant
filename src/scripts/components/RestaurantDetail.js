class RestaurantDetail extends HTMLElement {
  render() {
    this.innerHTML = `
        <section>
            <div class="restaurant-detail">
                <h2 class="restaurant-detail-label">Detail Restoran</h2>
                <div class="restaurant-detail-body"></div>
            </div>
            <div class="restaurant-detail-categories">
              <h2 class="restaurant-detail-label">Categories</h2>
            </div>
            <div class="restaurant-menus">
                <h2 class="restaurant-detail-label">Menus</h2>
                <div class="flex">
                  <div class="restaurant-food-menus">
                    <h3>Foods</h3>
                  </div>
                  <div class="restaurant-drink-menus">
                    <h3>Drinks</h3>
                  </div>
                </div>
            </div>
            <div class="customer-reviews">
              <h2 class="restaurant-detail-label">Customer Reviews</h2>
              <div class="restaurant-reviews"></div>
            </div>
            <div class="favoriteButtonContainer">
            </div>
        </section>
    `;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
