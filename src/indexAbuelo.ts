// indexabuelo.ts
import { Profiles } from './data/dataProfiles';
import styles from './indexAbuelo.css';
import './components/indexPadre';
import { Banner, Attribute } from './components/banner/banner';
import { WelcomeMessage, Attribute1 } from './components/welcomeMessage/welcomeMessage';
import { Review, Attribute2 } from './components/review-card/review-card';
import { Reviews } from './data/dataReviews';
import { Albums } from './data/dataAlbums';
import { Albumslog, Attribute3 } from './components/albums/albums'; // <--- Importa Albumslog y Attribute3

// Crear el App container
class AppContainer extends HTMLElement {
	banner: Banner[] = [];
	welcomeMessage: WelcomeMessage;
	Review: Review[] = [];
	Albumslog: Albumslog[] = [];

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

		// Crear el componente Review
		Reviews.forEach((review) => {
			const reviewCard = this.ownerDocument.createElement('my-review') as Review;
			//atributos de review
			// reviewCard.setAttribute('nameAndArtist', review.nameAndArtist);
			// reviewCard.setAttribute('typeAndYear ', review.typeAndYear);
			// reviewCard.setAttribute('albumPicture ', review.albumPicture);
			// reviewCard.setAttribute('userPicture  ', review.userPicture);
			// reviewCard.setAttribute('username ', review.username);
			// reviewCard.setAttribute('review ', review.review);
			// reviewCard.setAttribute('likes ', String(review.likes));
			// reviewCard.setAttribute('comments', String(review.comments));

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

		// Crear el componente Albumslog
		Albums.forEach((album) => {
			const albumcard = this.ownerDocument.createElement('my-albums') as Albumslog;

			// Establecer los atributos del componente
			// albumcard.setAttribute('albumCover', album.albumCover);
			albumcard.albumCover = album.albumCover;
			albumcard.setAttribute('views', String(album.views));
			albumcard.setAttribute('likes', String(album.likes));

			this.Albumslog.push(albumcard);
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
			// Agregar el componente Albumslog al shadowRoot
			this.Albumslog.forEach((album) => {
				this.shadowRoot?.appendChild(album);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
