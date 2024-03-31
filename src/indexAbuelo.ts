import { Profiles } from './data/dataProfiles';
import './components/indexPadre';
import MyBanner, { Attribute } from './components/banner/banner';

//Crear el App container
class AppContainer extends HTMLElement {
	banner: MyBanner[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		Profiles.forEach((user) => {
			//Crear el componente
			const bannerCard = this.ownerDocument.createElement('my-banner') as MyBanner;
			//Asignar propiedades/atributos al componente
			bannerCard.Nickname = user.Nickname;
			bannerCard.ProfilePicture = user.ProfilePicture;
			// bannerCard.setAttribute(Attribute.Nickname, user.Nickname);
			// bannerCard.setAttribute(Attribute.ProfilePicture, user.ProfilePicture);
			//Agregarlo al arreglo de perfiles
			this.banner.push(bannerCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.banner.forEach((banner) => {
				this.shadowRoot?.appendChild(banner);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
