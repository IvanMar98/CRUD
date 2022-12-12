import { LitElement, html, css } from 'lit';
import './card-element';

export class PageMainElement extends LitElement {
    static get styles(){
        return css`
           
            .main-container{
                display: grid;
                grid-template-columns: repeat(2,1fr);
            }
        `
}

    render() {
        return html`
       <div class="main-container">
            <div class="container">
                <card-element title = "Administrador" @click = "${this.acces}"></card-element>
            </div>
            <div class="container">
                <card-element title = "Empleado"  @click = "${this.acces}"></card-element>
            </div>
       </div> `;
    }

    acces(){
        this.dispatchEvent(new CustomEvent('accesRol', { 
            bubbles: true,
            composed: true
        }));
    }
}
customElements.define('page-main-element', PageMainElement);
