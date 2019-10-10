import { html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';

export const template =
  html`

<iron-ajax
        auto
        url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        handle-as="json"
        on-response="_handleResponse"
        debounce-duration="300">
    </iron-ajax>

  <p>[[responseString]]</p>
    `;