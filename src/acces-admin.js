import { LitElement, html, css } from 'lit';
import './input-element';
import './title-element';
import './button-element';
export class AccesAdmin extends LitElement {
    static get styles(){
       return css`
        :host{
            border: 1px solid #000;
            border-radius: 2rem;
        }
        .container-main{
            padding: 2rem
        }
        `
    }
    static get properties(){
        return{

        }
    }

    constructor(){
        super();
    }
    render() {
        return html`
            <div class = "container-main">
               <div>
                        <title-element title = "Login"></title-element>
               </div> 

                <div>
                        <input-element label = "User" placeholder = "Ingresa tu Usuario" inputType = "text"></input-element>
                </div>
                <div>
                        <input-element label = "Password" placeholder = "Ingresa tu contraseña" inputType = "password"></input-element>
                </div>
                <div>
                       <button-element text = "Login"></button-element> 
                </div>
                <div>
                       <button-element text = "Cancel" @click = "${this.eventBack}"></button-element> 
                </div>
            </div>`;
    }

    eventBack(){
        this.dispatchEvent(new CustomEvent('back', { 
            bubbles: true,
            composed: true
        }));
    }
}
customElements.define('acces-admin', AccesAdmin);
