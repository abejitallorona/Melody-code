import styles from './banner.css';

export enum Attribute {
	'Nickname' = 'Nickname',
	'ProfilePicture' = 'ProfilePicture',
}

export class Banner extends HTMLElement {
	Nickname?: string;
	ProfilePicture?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			Nickname: null,
			ProfilePicture: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.Nickname:
				this.Nickname = newValue;
				break;
			case Attribute.ProfilePicture:
				this.ProfilePicture = newValue;
				break;
			default:
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
        <style>
          ${styles}
        </style>
        <section class="top-banner">
          <div>
            <img class="Profile-Picture" src="${this.ProfilePicture}" alt="Profile Picture">
          </div>
          <h3>${this.Nickname}</h3>
          <img id="logo" src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png">
          <form id="search-form">
            <input type="text" name="search" placeholder="Search...">
          </form>
        </section>
      `;
		}
	}
}

customElements.define('my-banner', Banner);
