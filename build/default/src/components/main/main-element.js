import { PolymerElement, html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import { template } from "./template-main-element.js";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */

class MainComponent extends PolymerElement {
  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.myVar = 'polymer';
    this.showCalculator = true;
    this.showApod = false;
    this.showBeer = false;
  }

  static get properties() {
    return {};
  }

  static get template() {
    return template;
  }

  _handleNav(event) {
    switch (event.target.value) {
      case '0':
        this.showCalculator = true;
        this.showApod = false;
        this.showBeer = false;
        break;

      case '1':
        this.showCalculator = false;
        this.showApod = true;
        this.showBeer = false;
        break;

      case '2':
        this.showCalculator = false;
        this.showApod = false;
        this.showBeer = true;
        break;

      default:
        break;
    }
  }
  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */


  ready() {
    super.ready();
  }

}

customElements.define('main-element', MainComponent);