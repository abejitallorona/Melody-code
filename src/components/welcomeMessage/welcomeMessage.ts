import styles from './welcomeMessage.css';

export enum Attribute1 {
	'Fullname' = 'Fullname',
}

export class WelcomeMessage extends HTMLElement {
	Fullname?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute1, null> = {
			Fullname: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute1.Fullname:
				this.Fullname = newValue;
				break;
			default:
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
  <section class="welcome-message">
	<div class="message__user">
      <h2>Welcome ${this.Fullname}. Here is what we've been listening...</h2></div>

			<div class="additional-content">
          <P>YOUR FRIENDS HAVE SAID</P>
          <button id="add-entry-button">
              Add Entry <span>&#43;</span>
          </button>
					</div>
					<div class="bottom-line"></div>
  </section>
      `;
		}
	}
}

customElements.define('my-welcome-message', WelcomeMessage);
