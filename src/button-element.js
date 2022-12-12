import { LitElement, html, css } from 'lit';

export class ButtonElement extends LitElement {
    static get styles(){
        return css`
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `
    }

    render() {
        return html`
       <button>Ingresar</button> `;
    }
}
customElements.define('button-element', ButtonElement);
