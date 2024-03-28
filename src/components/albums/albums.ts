export enum Attributes {
	'albumCover' = 'albumCover',
	'views' = 'views',
	'likes' = 'likes',
}

class Albums extends HTMLElement {
	albumCover?: string;
	views?: number;
	likes?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attributes, null> = {
			albumCover: null,
			views: null,
			likes: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | null, newValue: string | null) {
		if (newValue !== null) {
			// this[propName] = newValue;
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
              <section class="popular__albums">
                  <img src="${this.albumCover}">
                  <p>${this.views}</p>
                  <p>${this.likes}</p>

              </section>
          `;
		}
	}
}
export default Albums;
customElements.define('albums', Albums);
