import { Profiles } from './data/dataProfiles';
import styles from './indexAbuelo.css';
import './components/indexPadre';
import { Banner, Attribute } from './components/banner/banner';
import { WelcomeMessage, Attribute1 } from './components/welcomeMessage/welcomeMessage';
import { Review, Attribute2 } from './components/review-card/review-card';
import { Reviews } from './data/dataReviews';

// Crear el App container
class AppContainer extends HTMLElement {
	banner: Banner[] = [];
	welcomeMessage: WelcomeMessage;
	Review: Review[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Crear el componente Banner
		Profiles.forEach((user) => {
			const bannerCard = this.ownerDocument.createElement('my-banner') as Banner;
			bannerCard.Nickname = user.Nickname;
			bannerCard.ProfilePicture = user.ProfilePicture;
			this.banner.push(bannerCard);
		});

		// Crear el componente WelcomeMessage
		this.welcomeMessage = this.ownerDocument.createElement('my-welcome-message') as WelcomeMessage;
		this.welcomeMessage.Fullname = Profiles[0].Fullname; // Asignar el nombre del primer usuario en la lista de perfiles

		Reviews.forEach((review) => {
			const reviewCard = this.ownerDocument.createElement('my-review') as Review;
			// Asignar directamente los valores a las propiedades del componente
			reviewCard.nameAndArtist = review.nameAndArtist;
			reviewCard.typeAndYear = review.typeAndYear;
			reviewCard.albumPicture = review.albumPicture;
			reviewCard.userPicture = review.userPicture;
			reviewCard.username = review.username;
			reviewCard.review = review.review;
			reviewCard.likes = review.likes;
			reviewCard.comments = review.comments;

			this.Review.push(reviewCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			// Agregar el componente Banner al shadowRoot
			this.banner.forEach((banner) => {
				this.shadowRoot?.appendChild(banner);
			});
			// Agregar el componente WelcomeMessage al shadowRoot
			this.shadowRoot.appendChild(this.welcomeMessage);
			// Agregar el componente Review al shadowRoot
			this.Review.forEach((review) => {
				this.shadowRoot?.appendChild(review);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
