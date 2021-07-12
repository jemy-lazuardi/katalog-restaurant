class Hero extends HTMLElement {
  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-inner">
                <h1 class="hero-title">Solusi Cepat Cari Tempat Tongkrongan</h1>
                <p class="hero-desc">Tidak Perlu Repot Cari Tempat Makan, Kami Menawarkan Tempat Yang Cocok Buat Anda Dan Teman Anda Dengan Kualitas dan Pengalaman Yang Hebat.</p>
            </div>
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

customElements.define('hero-banner', Hero);
