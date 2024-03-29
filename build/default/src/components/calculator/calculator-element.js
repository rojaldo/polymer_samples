import { PolymerElement, html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import "../../../node_modules/@polymer/iron-icons/iron-icons.js";
import { template } from "./template-calculator-element.js";
const InitState = 0;
const FirstFigureState = 1;
const SecondFigureState = 2;
const ResultState = 3;
const Operators = ['+', '-', '*', '/'];

class CalculatorElement extends PolymerElement {
  constructor() {
    super();
    this.display = '';
    this.disp = '';
    this.currentState = InitState;
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
  }

  static get template() {
    return template;
  }

  _handleChange(event) {
    console.log('calculator: ' + JSON.stringify(event));

    this._handleClick(this.disp);
  }
  /**
    * Object describing property-related metadata used by Polymer features
    */


  static get properties() {
    return {};
  }
  /**
   * Use for one-time configuration of your component after local DOM is
   * initialized.
   */


  ready() {
    super.ready();
  }

  _handleClick(value) {
    if (!isNaN(value)) {
      const myNumber = Number(value);

      this._handleNumber(myNumber);
    } else {
      this._handleString(value);
    }
  }

  _handleNumber(myNumber) {
    switch (this.currentState) {
      case InitState:
        this.firstFigure = myNumber;
        this.display += String(myNumber);
        this.currentState = FirstFigureState;
        break;

      case FirstFigureState:
        this.firstFigure = this.firstFigure * 10 + myNumber;
        this.display += String(myNumber);
        break;

      case SecondFigureState:
        this.secondFigure = this.secondFigure * 10 + myNumber;
        this.display += String(myNumber);
        break;

      case ResultState:
        this.firstFigure = myNumber;
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;
        this.currentState = FirstFigureState;
        this.display = String(myNumber);
        break;

      default:
        break;
    }
  }

  _handleString(operator) {
    switch (this.currentState) {
      case InitState:
        break;

      case FirstFigureState:
        if (this._isOperator(operator)) {
          this.operator = operator;
          this.currentState = SecondFigureState;
          this.display += operator;
        }

        break;

      case SecondFigureState:
        if (operator === '=') {
          this.result = this._resolve();
          this.currentState = ResultState;
          this.display = this.display + operator + this.result;
        }

        break;

      case ResultState:
        if (this._isOperator(operator)) {
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.operator = operator;
          this.result = 0;
          this.currentState = SecondFigureState;
          this.display = this.firstFigure + this.operator;
        }

        break;

      default:
        break;
    }
  }

  _resolve() {
    console.log(Operators[0]);

    switch (this.operator) {
      case Operators[0]:
        debugger;
        return this.firstFigure + this.secondFigure;

      case Operators[1]:
        return this.firstFigure - this.secondFigure;

      case Operators[2]:
        return this.firstFigure * this.secondFigure;

      case Operators[3]:
        return this.firstFigure / this.secondFigure;

      default:
        break;
    }
  }

  _isOperator(operator) {
    return Operators.indexOf(operator) > -1;
  }

}

customElements.define('calculator-element', CalculatorElement);