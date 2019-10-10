import { html } from '@polymer/polymer/polymer-element.js';
export const template =
  html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      <display-element mydisplay="[[display]]"></display-element>
      <keyboard-element output="[[input]]" display></keyboard-element>
    `;