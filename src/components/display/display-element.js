import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { template } from './template-display-element';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class DisplayElement extends PolymerElement {

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
    return {
      mydisplay: {
        type: String
      }
    }
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

customElements.define('display-element', DisplayElement);