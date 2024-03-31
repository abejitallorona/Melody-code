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

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName as Attribute) {
			default:
				this[propName] = newValue;
		}
		this.render();
	}

	render() {
		// Agregar el contenido HTML
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
              <section class="top-banner">
							<div>${this.ProfilePicture}</div>
                  <h3>${this.Nickname}</h3>
									<img src="https://i.pinimg.com/736x/31/d6/f2/31d6f299936413ce0ec3bc99d57cb7db.jpg">
                  <form id="search-form">
                      <input type="text" name="search" placeholder="Search...">
                      <button type="submit">Search</button>
                  </form>
              </section>
          `;
		}
	}
}
export default Banner;
customElements.define('my-banner', Banner);
