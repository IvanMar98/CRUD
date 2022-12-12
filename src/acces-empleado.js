import { LitElement, html, css } from 'lit';

export class AccesEmpleado extends LitElement {
    static get styles(){
        return css`
            :host {
                display: block;
            }
        `
    }

    render() {
        return html`<p>Hola</p>`;
    }
}
customElements.define('acces-empleado', AccesEmpleado);
