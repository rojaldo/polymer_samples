import { html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import "../../../node_modules/@polymer/iron-ajax/iron-ajax.js";
export const template = html`
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<iron-ajax
        auto
        url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        handle-as="json"
        on-response="_handleResponse"
        debounce-duration="300">
    </iron-ajax>
    <div class="container">
    <div class="jumbotron">
        <h1 class="display-3">[[response.title]]</h1>
        <p class="lead">[[response.date]]</p>
        <hr class="my-2">
        <img src="[[response.url]]" style="width: 100%" alt="">
        <p class="lead">
        [[response.explanation]]
        </p>
    </div>
</div>


<p>[[responseString]]</p>
    `;