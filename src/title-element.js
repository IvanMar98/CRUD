import { LitElement, html, css } from 'lit';

export class TitleElement extends LitElement {
    static get styles(){
        return css`
            :host {
                display: block;
            }
            h2{
                text-align: center;
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

    render() {
        return html`<h2>${this.title}</h2>`;
    }
}
customElements.define('title-element', TitleElement);
