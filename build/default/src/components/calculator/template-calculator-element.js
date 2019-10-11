import { html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
export const template = html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      <display-element mydisplay="[[display]]"></display-element>
      <keyboard-element on-output="_handleChange" display="{{disp}}"></keyboard-element>
    `;