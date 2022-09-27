class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<h1>Hello world! ${this.getAttribute("name")}</h1>`
  }
}
customElements.define("hello-world", HelloWorldComponent)
