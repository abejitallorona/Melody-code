class Banner extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['username', 'userpicture', 'serach-bar'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldvlue, newValue) {
		this[propName] = newValue;
	}

	render() {
		//QUEMANDO CONTENIDO!!
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
          <section class="banner-section">
              <img src="https://i.pinimg.com/564x/0c/dc/42/0cdc42ae52de52c6ebc16f1f23b3dabd.jpg">
              <h3>LAURIX</h3>
              <img src="https://co.pinterest.com/pin/703265298091791024">
              <form id="search-form">
                    <input type="text" name="search" placeholder="Search...">
                    <button type="submit">Search</button>
                </form>
          </section>
      `;
	}
}

customElements.define('ubanner', Banner);
export default Banner;
