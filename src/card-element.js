import { LitElement, html, css } from 'lit';

export class CardElement extends LitElement {
    static get styles(){
        return css`
            :host {
                display: block;
            }
            .card{
               display: flex;
               align-items: center;
               justify-content: center;
               border: 1px solid #000;
               border-radius: 2rem;
               margin: 2rem;
               padding: 1rem;
            }
        `
    }
    static get properties(){
        return{
            title:{
                type: String
            }
        }
    }
    constructor(){
        super();
    }

    render() {
        return html`
       <div class="card">
        <h3>
            ${this.title}
        </h3>
       </div> `;
    }
}
customElements.define('card-element', CardElement);
