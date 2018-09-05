import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element";
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';

class ChangeDialog extends PolymerElement {
    static get template() {
        return html`
            <style>
                paper-progress {
                    display: none;
                    width: 100%;
                }
            </style>
            <paper-dialog id="dialog" modal>
                <paper-progress indeterminate></paper-progress>
                <h2>Change Account Details</h2>
                <paper-dialog-scrollable>
                    <iron-form id="form" method="post" action="http://localhost:3001/alter/[[data.id]]" iron-form-submit="submit">
                        <form>
                            <paper-input type="text" label="Name" value=[[data.name]] required></paper-input>
                            <paper-input type="email" label="Email" value=[[data.email]] required></paper-input>
                            <paper-input type="text" label="Address" value=[[data.address]] required></paper-input>
                        </form>
                    </iron-form>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-dismiss>Cancel</paper-button>
                    <paper-button dialog-confirm autofocus on-click="change">Change</paper-button>
                </div>
            </paper-dialog>
            <paper-toast id="toast" text="[[message]]"></paper-toast>
        `;
    }
    change() {
        this.$.progressbar.style.display = 'block';
        this.$.form.submit();
    }

    submit(event) {
        this.message = "Account changed successfully";
        this.$.toast.show();
        this.$.dialog.close();
    }
}
window.customElements.define('change-dialog', ChangeDialog);