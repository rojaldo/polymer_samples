import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import { template } from './template-demo-element';

class DemoElement extends PolymerElement {
  constructor(){
    super();
    this.display = 0;
  }

  static get template() {
    return template;
  }
  
  _handleClick(){
    this.display = 1;
  }
}
customElements.define('demo-element', DemoElement);
