import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element";
import '@polymer/iron-list/iron-list.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './user-item.js';

class UserList extends PolymerElement {
    static get template() {
        return html`
            <style>
                iron-list {
                    padding: 0 5%;
                }
            </style>
            <iron-ajax
                id="ajax"
                url="data.json"
                last-response="{{data}}"
                handle-as="json"
            >
            </iron-ajax>
            <iron-list items="[[data]]" as="user">
                <template>
                    <user-item details="[[user]]"></user-item>
                </template>
            </iron-list>
        `;
    }

    ready() {
        super.ready();
        this.$.ajax.generateRequest();
    }
}
window.customElements.define('user-list', UserList);