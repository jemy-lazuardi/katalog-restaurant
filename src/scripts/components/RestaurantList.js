class restaurantList extends HTMLElement {
  render() {
    this.innerHTML = `
        <section>
            <div class="restaurant-list">
                <h1 class="restaurant-list-label">Daftar Restoran</h1>
                <div class="restaurants"></div>
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

customElements.define('restaurant-list', restaurantList);
