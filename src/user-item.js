import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element";
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import './change-dialog.js';
import './delete-dialog.js';

class UserItem extends PolymerElement {
    static get template() {
        return html `
            <style>
                paper-card {
                    display: block;
                    margin: 1%;
                    --paper-card-header-color: #FFFFFF;
                    --paper-card-header: {
                        background: #34495E;
                    }
                    --paper-card-content: {
                        background: #FFFFFF;
                    }
                    --paper-card-actions: {
                        display: flex;
                        justify-content: flex-end;
                        padding: 1%;
                        background: #D6DBDF;
                    }
                }
                paper-button:nth-child(1) {
                    color: #FFFFFF;
                    background: #E74C3C;
                }
                paper-button:nth-child(2) {
                    color: #FFFFFF;
                    background: #5D6D7E;
                }
            </style>
            <delete-dialog id="deleteDialog" data="[[details]]"></delete-dialog>
            <paper-card heading="[[details.name]]" elevation=3>
                <div class="card-content">
                    <p><strong>ID</strong>: [[details.id]]</p>
                    <p><strong>Email</strong>: [[details.email]]</p>
                    <p><strong>Address</strong>: [[details.address]]</p>
                    <p>Other Details</p>
                </div>
                <div class="card-actions">
                    <paper-button on-click="deleteAccount" raised>Delete</paper-button>
                    <paper-button on-click="changeAccount" raised>Change</paper-button>
                </div>  
            </paper-card>
            <change-dialog id="changeDialog" data="[[details]]"></change-dialog>
        `;
    }

    changeAccount() {
        window.document.querySelector('change-dialog').open();
    }
    
    deleteAccount() {
        this.$.deleteDialog.show();
    }
}
window.customElements.define('user-item', UserItem);