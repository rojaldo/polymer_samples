import { html } from '@polymer/polymer/polymer-element.js';
export const template =
    html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      <h2>[[display]]</h2>
      <button on-click="_handleClick">1</button>
    `;