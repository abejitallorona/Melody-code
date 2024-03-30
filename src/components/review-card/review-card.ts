export enum Attributes {
	'nameAndArtist' = 'nameAndArtist',
	'typeAndYear' = 'typeAndYear',
	'albumPicture' = 'albumPicture',
	'userPicture' = 'userPicture',
	'username' = 'username',
	'review' = 'review',
	'likes' = 'likes',
	'comments' = 'comments',
}

class Review extends HTMLElement {
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
		const attrs: Record<Attributes, null> = {
			nameAndArtist: null,
			typeAndYear: null,
			albumPicture: null,
			userPicture: null,
			username: null,
			review: null,
			likes: null,
			comments: null,
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
              <section class="review__card">
              <div>
              <img src="${this.albumPicture}">
              </div>
              <div class="card--title">
              <h1>${this.nameAndArtist}</h1>
              <h1>${this.typeAndYear}</h1>
              </div>
              <div class="card--user">
              <img src=${this.userPicture}>
              <h3>${this.username}</h3>
              </div>
              <div class="card--review">
              <img src=${this.review}>
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
export default Review;
customElements.define('Review', Review);
