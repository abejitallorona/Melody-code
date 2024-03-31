import { Profiles } from './data/dataProfiles';
import './components/indexPadre';
import { Banner, Attribute } from './components/banner/banner';
import { WelcomeMessage, Attribute1 } from './components/welcomeMessage/welcomeMessage';

// Crear el App container
class AppContainer extends HTMLElement {
	banner: Banner[] = [];
	welcomeMessage: WelcomeMessage;

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
		}
	}
}

customElements.define('app-container', AppContainer);
