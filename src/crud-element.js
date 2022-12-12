import { LitElement, html, css, nothing } from 'lit';
import './page-main-element';
import './acces-admin';
import './card-element';

export class CrudElement extends LitElement {
    static get styles() {
        return css`
            :host {
                height: 100vh;
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
            .main{
                border: 1px solid #000;
                border-radius: 2rem;
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

    constructor() {
        super();
        this.bandera = true;
    }

    render() {
        return html`
        ${this.bandera ?
                html`
                <h1>Login</h1> 
                <page-main-element @accesRol = "${this.acces}"></page-main-element>
                `:
                
                html`<acces-admin></acces-admin>`
        }
        `
            ;
    }

    acces(event){
       this.bandera = false
    }
}
customElements.define('crud-element', CrudElement);
