import styles from './review-card.css';
export enum Attribute2 {
	'nameAndArtist' = 'nameAndArtist',
	'typeAndYear' = 'typeAndYear',
	'albumPicture' = 'albumPicture',
	'userPicture' = 'userPicture',
	'username' = 'username',
	'review' = 'review',
	'likes' = 'likes',
	'comments' = 'comments',
}

export class Review extends HTMLElement {
	nameAndArtist?: string;
	typeAndYear?: string;
	albumPicture?: string;
	userPicture?: string;
	username?: string;
	review?: string;
	likes?: number;
	comments?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs2: Record<Attribute2, null> = {
			nameAndArtist: null,
			typeAndYear: null,
			albumPicture: null,
			userPicture: null,
			username: null,
			review: null,
			likes: null,
			comments: null,
		};
		return Object.keys(attrs2);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute2, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute2.likes:
				this.likes = newValue ? Number(newValue) : undefined;
				break;

			case Attribute2.comments:
				this.comments = newValue ? Number(newValue) : undefined;
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
              <section class="review__card">
              <div>
							<img class="Album-Picture" src="${this.albumPicture}" alt="Album Picture">
              </div>
              <div class="card--title">
              <h1>${this.nameAndArtist}</h1>
              <h1>${this.typeAndYear}</h1>
              </div>
              <div class="card--user">
              <img class="User-Picture" src="${this.userPicture}" alt="User Picture">

              <h3>${this.username}</h3>
              </div>
              <div class="card--review">
              <h4>${this.review}</h4>
              </div>
              <div class="card--like">
               <p>${this.likes}</p>
                <p>${this.comments}</p>
              </div>
              </section>
          `;
		}
	}
}
customElements.define('my-review', Review);
