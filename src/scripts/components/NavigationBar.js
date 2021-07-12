class NavigationBar extends HTMLElement {
  render() {
    this.innerHTML = `
        <div>
            <h1>Restoku</h1>
        </div>
        <nav>
            <ul class="nav-list">
                <li><a href="#/">Home</a></li>
                <li><a href="#/favorite">Favorites</a></li>
                <li><a href="https://www.facebook.com/jemy.lazuardi.7" target="_blank" rel="noreferrer">About</a></li>
            </ul>
        </nav>
        <button tabindex="0" id="hamburgerButton" class="nav-menu" aria-label="Navigation Menu">☰</button>
        <div id="sideNav" class="side-nav">
            <a href="#/">Home</a>
            <a href="#/favorite">Favorites</a>
            <a href="https://www.facebook.com/jemy.lazuardi.7">About</a>
         </div>
        `;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}

customElements.define('navigation-bar', NavigationBar);
