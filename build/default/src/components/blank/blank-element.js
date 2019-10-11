import { PolymerElement, html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import { template } from "./template-blank-element.js";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */

class BlankComponent extends PolymerElement {
  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.myVar = 'polymer';
  }

  static get properties() {
    return {};
  }

  static get template() {
    return template;
  }
  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */


  ready() {
    super.ready();
  }

}

customElements.define('blank-element', BlankComponent);