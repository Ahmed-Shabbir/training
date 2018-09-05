import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import {setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './login-form.js';
import './admin-dash.js';
import './error-page.js';

setRootPath(AppGlobals.rootPath);

class BankApp extends PolymerElement {
    static get template() {
        return html`
            <style>
                iron-pages {
                    height: 100%;
                }
            </style>
            <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
            <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
            <iron-pages id="ironpages" selected="{{routeData.page}}" attr-for-selected="name">
                <admin-dash name="admin"></admin-dash>
                <login-form name="login"></login-form>
                <error-page name="error"></error-page>
            </iron-pages>
        `;
    }
    ready() {
        super.ready();
        if(this.$.ironpages.selected === '') {
            this.$.ironpages.selected = 'login';
        }
    }
}
window.customElements.define('bank-app', BankApp);