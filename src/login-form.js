import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element";
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/iron-form/iron-form.js';
class LoginForm extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    @apply(--layout-vertical);
                    @apply(--layout-center-center);
                }                
                paper-card {
                    display: flex;
                    flex-direction: column;
                    width: 60vw;
                    min-height: 30vw;  
                    height: auto;  
                    --paper-card-header-color: #FFFFFF;
                    --paper-card-header-text: {
                        font-size: 2em;
                    };
                    --paper-card-header: {
                        text-align: center;
                        background: #17202A;
                    };
                    --paper-card-content: {
                        padding: 0;
                    };
                    --paper-card-actions: {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
                paper-progress {
                    display: none;
                    width: 100%;
                }
                iron-form {
                    padding: 5%;
                }
                paper-input + paper-input {
                    margin: 2% 0%;
                }
                paper-button {
                    font-size: 1.5em;
                    color: #FFFFFF;
                    background: #2ECC71;
                    padding: 2%;
                    margin: 5% 0%;
                }
                .error {
                    box-sizing: border-box;
                    display: none;
                    font-size: 1.5em;
                    width: 100%;
                    color: #FFFFFF;
                    background: #F1948A;
                    text-align: center;
                    align-self: flex-end;
                }
            </style>
            <paper-card heading="Account Login">
                <div class="card-content">
                    <paper-progress id="progressbar" indeterminate></paper-progress>
                    <iron-form id="form" on-iron-form-response="loginResponse" on-iron-form-error="loginError">
                        <form method="post" action="http://localhost:3001/login">
                            <paper-input name="username" type="text" label="Username" required></paper-input>
                            <paper-input name="password" type="password" label="Password" required></paper-input>
                        </form>
                    </iron-form>
                </div>
                <div class="card-actions">
                    <paper-button raised on-click="login">Login</paper-button>
                </div>
                <div id="error" class="error">
                    <p><strong>Error</strong>: <span id="span">Unknown error occured.</span></p>
                </div>
            </paper-card>
        `;
    }
    login() {
        this.$.error.style.display = "none";
        this.$.progressbar.style.display = "block";
        this.$.form.submit();
    }
    loginResponse(event) {
        this.$.progressbar.style.display = "none";
    }
    loginError(event) {
        this.$.progressbar.style.display = "none";
        this.$.span.innerHTML = event.detail.request.statusText;
        this.$.error.style.display = "block";
    }
}
window.customElements.define('login-form', LoginForm);