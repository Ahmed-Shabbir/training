import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element";
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import './user-list.js';
import './icons.js';

class AdminDash extends PolymerElement {
    static get template() {
        return html`
            <style>
                app-header {
                    color: #FFFFFF;
                    background: #17202A;
                }
                .title {
                    text-align: center;
                    text-transform: uppercase;
                    font-size: 2em;
                }
                app-drawer-layout:not([narrow]) [drawer-toggle] {
                    display: none;
                }
                app-drawer {
                    --app-drawer-content-container: {
                        background: #F2F4F4;   
                    }; 
                }
                app-toolbar + app-toolbar{
                    background: #34495E;
                }
                paper-tab {
                    font-size: 1.5em;
                }
                paper-tab:nth-child(1) {
                    background: #2ECC71;
                }
                paper-tab:nth-child(2) {
                    background: #3498DB;
                }
                paper-tab:nth-child(3) {
                    background: #F39C12;
                }
                paper-listbox {
                    padding-top: 10%;
                    --paper-listbox-background-color: #F2F4F4;
                    --paper-listbox-color: #000000;
                    --paper-item-selected: {
                        color: #FFFFFF;
                        background: #F39C12;
                    };
                }
                paper-item:hover {
                    color: #FFFFFF;
                    background: #F1C40F;
                }
                paper-fab {
                    bottom: 0;
                    right: 0;
                    margin: 1%;
                    position: absolute;
                    --paper-fab-iron-icon: {
                        height: 100%;
                        width: 100%;
                    }
                }
            </style>
            <app-drawer-layout force-narrow fullbleed>
                <app-drawer slot="drawer">
                    <paper-listbox selected="0">
                        <paper-item>Logout</paper-item>
                    </paper-listbox>             
                </app-drawer>
                <app-header-layout fullbleed>
                    <app-header slot="header" fixed condenses reveals>
                        <app-toolbar>
                            <paper-icon-button icon="icons:menu" drawer-toggle></paper-icon-button>
                            <div class="title" main-title>Shabank</div>
                            </app-toolbar>
                        <app-toolbar>
                            <paper-tabs bottom-item selected="0">
                                <paper-tab>Accounts</paper-tab>
                                <paper-tab>Balance</paper-tab>
                                <paper-tab>Transactions</paper-tab>
                            </paper-tabs>
                        </app-toolbar>
                    </app-header>
                    <user-list></user-list>
                    <paper-fab id="fab" icon="icons:close"></paper-fab>
                    <paper-tooltip for="fab" position="left">Add new account</paper-tooltip>
                </app-header-layout>
            </app-drawer-layout>
        `;
    }
}

window.customElements.define('admin-dash', AdminDash);