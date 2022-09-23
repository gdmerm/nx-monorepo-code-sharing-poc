class GifyItem extends HTMLElement {
  constructor() {
    super()
    this.width = 0
    this.height = 0
  }

  static get observedAttributes() {
    return ['data-uri'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (property === 'data-uri') {
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
    const uri = this.attributes['data-uri'].value
    const width = this.attributes['data-width'].value
    const height = this.attributes['data-height'].value
    this.width = width
    this.height = height

    this.render(uri, width, height)
  }
}

customElements.define('gify-item', GifyItem)
