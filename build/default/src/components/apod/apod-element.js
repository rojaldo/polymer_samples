import { PolymerElement, html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import { template } from "./template-apod-element.js";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */

class ApodComponent extends PolymerElement {
  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.responseString = 'No response';
    this.response = {};
  }

  static get properties() {
    return {};
  }

  static get template() {
    return template;
  }

  _handleResponse(event, request) {
    console.log(JSON.stringify(request.response));
    this.response = request.response;
    this.responseString = JSON.stringify(this.response);
  }
  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */


  ready() {
    super.ready();
  }

}

customElements.define('apod-element', ApodComponent);