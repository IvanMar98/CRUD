import { LitElement, html, css, nothing } from 'lit';
import './page-main-element';

export class CrudElement extends LitElement {
    static get styles() {
        return css`
            :host {height: 100vh;
                display: grid;
                grid-template-areas: 
                "title title"
                "profile profile";
                align-content: center;
                justify-content: center;
            }

            h1{
                grid-area: title;
                display: flex;
                justify-content: center;
                
            }
            div{
                grid-area: profile;
            }
        `
    }
    static get properties() {
        return {
            bandera: {
                type: Boolean
            }
        }
    }

    constructor(){
        super();
        this.bandera = true;
    }

    render() {
        return html`
       <h1>Login</h1>
        ${this.bandera ?
            html` <div>
                <page-main-element></page-main-element>
                </div>`:
            nothing}`;
    }
}
customElements.define('crud-element', CrudElement);
