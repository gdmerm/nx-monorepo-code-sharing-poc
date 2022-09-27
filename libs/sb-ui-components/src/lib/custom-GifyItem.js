class GifyItem extends HTMLElement {
  constructor() {
    super()
    this.width = 0
    this.height = 0
  }

  static get observedAttributes() {
    return ['imageurl'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (property === 'imageurl') {
      if (oldValue === newValue) return;
      this.render(newValue, this.width, this.height)
    }
  }

  render(uri, width, height) {
    this.innerHTML = `
      <picture>
        <img src="${uri}" widh='${width}' height="${height}" />
      </picture>
    `
  }

  connectedCallback() {
    const uri = this.getAttribute('imageurl')
    const width = this.getAttribute('data-width')
    const height = this.getAttribute('data-height')
    this.width = width
    this.height = height

    this.render(uri, width, height)
  }
}

customElements.define('gify-item', GifyItem)
