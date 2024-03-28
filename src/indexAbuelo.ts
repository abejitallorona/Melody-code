import { dataAlbums } from './data/dataAlbums.js';
import './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {}
}

customElements.define('app-container', AppContainer);
