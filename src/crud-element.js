import { LitElement, html, css } from 'lit';

export class CrudElement extends LitElement {
    static get styles(){
        return css`
            :host {
                display: block;
            }
        `
    }

    render() {
        return html`Hola mundo desde el crud`;
    }
}
customElements.define('crud-element', CrudElement);
