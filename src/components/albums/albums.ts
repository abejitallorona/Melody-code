import styles from './albums.css';
import { Albums } from '../../data/dataAlbums';
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
			<style>
			${styles}
		</style>

		 		<section class="popular_albums">
		<img class="Album-Cover" src="${this.albumCover}" alt="Album Cover">
		<div class="albums-bottom-icons">
				<div>
						<img class="views-icon" src="icono_vistas.png" alt="Icono de vistas">
						<p>${this.views}</p>
				</div>
				<div>
						<img class="likes-icon" src="icono_likes.png" alt="Icono de likes">
						<p>${this.likes}</p>
				</div>
		</div>
</section>
          `;
		}
	}
}
customElements.define('my-albums', Albumslog);
