import styles from './banner.css';
//Plantilla para componentes: enum: definir constantes con nombres
export enum Attribute {
	'Nickname' = 'Nickname',
	'ProfilePicture' = 'ProfilePicture',
}

class Banner extends HTMLElement {
	Nickname?: string;
	ProfilePicture?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//Método de observar los atributos
	//return ["Nickname", "ProfilePicture"]
	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			//Record: trabajar con las variables que no tienen valor
			Nickname: null,
			ProfilePicture: null,
		};
		return Object.keys(attrs); //acceder a los keys del objeto (key: izquierda, valores: derecha)
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
		// Agregar el contenido HTML
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					${styles}
				</style>
				<section class="top-banner">
					<div class= "user">
						<img class="Profile-Picture" src="${this.ProfilePicture}" alt="Profile Picture">
						<h3>${this.Nickname}</h3>
					</div>
					<img id="logo" src="https://i.imgur.com/lvK6X2s.png">
					<form id="search-form">
						<input type="text" name="search" placeholder="Search...">
					</form>
				</section>
			`;
		}
	}
}

export default Banner;
customElements.define('my-banner', Banner);
