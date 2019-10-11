import { PolymerElement, html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import { template } from "./template-keyboard-element.js";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */

class KeyboardComponent extends PolymerElement {
  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  static get properties() {
    return {
      display: {
        type: String,
        readonly: true,
        notify: true
      }
    };
  }

  static get template() {
    return template;
  }

  _handleClick(event) {
    this.display = event.target.value;
    this.dispatchEvent(new CustomEvent('output', {}));
  }
  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */


  ready() {
    super.ready();
  }

}

customElements.define('keyboard-element', KeyboardComponent);