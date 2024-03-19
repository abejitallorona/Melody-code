export enum Attributes {
	'Username' = 'Username',
	'ProfilePicture' = 'ProfilePicture',
}

class Banner extends HTMLElement {
	Username?: string;
	ProfilePicture?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			Username: null,
			ProfilePicture: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			this[propName] = newValue;
		}
	}

	render() {
		// Agregar el contenido HTML
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
              <section class="banner-section">
                  <img src="https://i.pinimg.com/564x/0c/dc/42/0cdc42ae52de52c6ebc16f1f23b3dabd.jpg">
                  <h3>${this.Username}</h3>
                  <img src="https://co.pinterest.com/pin/703265298091791024">
                  <form id="search-form">
                      <input type="text" name="search" placeholder="Search...">
                      <button type="submit">Search</button>
                  </form>
              </section>
          `;
		}
	}
}
export default Banner;
customElements.define('banner', Banner);
