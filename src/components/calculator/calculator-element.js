import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import { template } from './template-calculator-element';

class CalculatorElement extends PolymerElement {

  constructor() {
    super();
    this.display = '';

  }

  static get template() {
    return template;
  }

  _handleChange(event) {
    console.log('calculator: ' + event.target.display.content);
    
  }

  /**
    * Object describing property-related metadata used by Polymer features
    */
  static get properties() {
    return {
      input: {
        notify: true,
        observer: '_handleChange'
      }
    };
  }

  /**
   * Use for one-time configuration of your component after local DOM is
   * initialized.
   */
  ready() {
    super.ready();
    this.addEventListener('output', function (e) {
      console.log('Ready()' + e.display.content)
    })
  }

}

customElements.define('calculator-element', CalculatorElement);
