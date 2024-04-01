export enum Attribute3 {
	'albumCover' = 'albumCover',
	'views' = 'views',
	'likes' = 'likes',
}

export class Albumslog extends HTMLElement {
	albumCover?: string;
	views?: number;
	likes?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute3, null> = {
			albumCover: null,
			views: null,
			likes: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute3, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute3.views:
				this.views = newValue ? Number(newValue) : undefined;
				break;

			case Attribute3.likes:
				this.likes = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
              <section class="popular__albums">
							<div>
							<img class="Album-Cover" src="${this.albumCover}" alt="Album Cover">
              </div>
                  <p>${this.views}</p>
                  <p>${this.likes}</p>
              </section>
          `;
		}
	}
}
customElements.define('my-albums', Albumslog);
