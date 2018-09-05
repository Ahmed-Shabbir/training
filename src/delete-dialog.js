import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element";
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-button/paper-button.js';

class DeleteDialog extends PolymerElement {
    static get template() {
        return html`
            <style>
            </style>
            <paper-dialog id="dialog">
                <h2>Delete Account</h2>
                <p>Account with id: <strong>[[data.id]]</strong> will be deleted.</p>
                <div class="buttons">
                    <paper-button dialog-dismiss>Cancel</paper-button>
                    <paper-button dialog-confirm autofocus>Confirm</paper-button>
                </div>
            </paper-dialog>
        `;
    }
    show() {
        this.$.dialog.open();
    }
    
}
window.customElements.define('delete-dialog', DeleteDialog);