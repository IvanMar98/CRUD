import { LitElement, html, css, nothing } from 'lit';
import './page-main-element';
import './acces-admin';
import './title-element'
import './acces-empleado';
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

            .title{
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
            viewPageMain: {
                type: Boolean
            },
            viewPageAdmin:{
                type: Boolean
            },
            viewPageEmpleado:{
                type: Boolean
            }
        }
    }

    constructor() {
        super();
        this.viewPageMain = true;
        this.viewPageAdmin = false;
        this.viewPageEmpleado = false;
    }

    render() {
        return html`
        ${this.viewPageMain ?
                html`
                <title-element class="title" title = "Inventario"></title-element>
                <page-main-element @accesAdministrador = "${this.accesAdmin}" @accesEmpleado = "${this.accesEmpleado}"></page-main-element>
                `:null
        }    
        ${this.viewPageAdmin ?
                html`<acces-admin @back = "${this.regresar}"></acces-admin>`
                :null
        }
        ${this.viewPageEmpleado ?
                html`<acces-empleado></acces-empleado>`
                :null
        }`;
    }

    accesAdmin(event){
       this.viewPageMain = false;
       this.viewPageAdmin = true;
       this.viewPageEmpleado = false;
       console.log(this.viewPageEmpleado);
    }
    accesEmpleado(event){
        this.viewPageMain = false;
        this.viewPageAdmin = false;
        this.viewPageEmpleado = true;
        console.log(this.viewPageEmpleado);
    }
    regresar(event){
        this.viewPageMain = true;
        this.viewPageAdmin = false;
        this.viewPageEmpleado = false;
    }
}
customElements.define('crud-element', CrudElement);
