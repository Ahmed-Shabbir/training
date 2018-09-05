import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element";

class ErrorPage extends PolymerElement {

    static get template() {
        return html`
            <h1>404 - Page not found</h1>
        `;
    }
}

window.customElements.define('error-page', ErrorPage);