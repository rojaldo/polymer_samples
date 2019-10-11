import { html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import "../../../node_modules/@polymer/iron-ajax/iron-ajax.js";
export const template = html`
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<iron-ajax
        auto
        url="https://api.punkapi.com/v2/beers?per_page=80"
        handle-as="json"
        on-response="_handleResponse"
        debounce-duration="300">
    </iron-ajax>

    <div class="container">

<div class="row">
    <template is="dom-repeat" items="{{response}}" as="beer">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card m-2">
                <div class="card-body">
                    <h4 class="card-title">[[beer.name]]</h4>
                    <div class="container-fluid text-center">
                    <img src="[[beer.image_url]]" alt="" style="width: 75px">
                    </div>
                    <p class="card-text">[[beer.description]]</p>
                </div>
            </div>
        </div>
    </template>
</div>

</div>
  <p>[[responseString]]</p>
    `;