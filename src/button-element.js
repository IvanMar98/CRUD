import { LitElement, html, css } from 'lit';

export class ButtonElement extends LitElement {
    static get styles(){
        return css`
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            button{
                margin: .5rem auto;
            }
        `
    }
    static get properties(){
        return{
            text:{
                type: String
            }
        }
    }
    render() {
        return html`
       <button>${this.text}</button> `;
    }
}
customElements.define('button-element', ButtonElement);
