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
                <card-element title = "Administrador" @click = "${this.accesAdmin}"></card-element>
            </div>
            <div class="container">
                <card-element title = "Empleado"  @click = "${this.accesEmp}"></card-element>
            </div>
       </div> `;
    }

    accesAdmin(){
        this.dispatchEvent(new CustomEvent('accesAdministrador', { 
            bubbles: true,
            composed: true
        }));
    }
    accesEmp(){
        this.dispatchEvent(new CustomEvent('accesEmpleado', { 
            bubbles: true,
            composed: true
        }));
    }
}
customElements.define('page-main-element', PageMainElement);
