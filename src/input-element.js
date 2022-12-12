import { LitElement, html, css } from 'lit';

export class InputElement extends LitElement {
    static get styles() {
        return css`
        
        input{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem
        }
        
    `
    }
    static get properties() {
        return {
            placeholder:{
                type: String
            },
            inputType:{
                type: String
            }
        }
    }

    constructor() {
        super();
    }
    render() {
        return html`
            <div class = "container-main">
                
                <div>
                    <input type="${this.inputType}" placeholder="${this.placeholder}">
                </div>
            </div>
        `;
    }
}
customElements.define('input-element', InputElement);
