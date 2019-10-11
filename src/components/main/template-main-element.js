import { html } from '@polymer/polymer/polymer-element.js';
export const template =
  html`
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <div class="container">
    <span class="input-group-btn">
        <button type="button" class="btn btn-primary" value="0" on-click="_handleNav">Calculator</button>
        <button type="button" class="btn btn-primary" value="1" on-click="_handleNav">Apod</button>
        <button type="button" class="btn btn-primary" value="2" on-click="_handleNav">Beers</button>
    </span>        
    <template is="dom-if" if="{{showCalculator}}">
    <calculator-element></calculator-element>
    </template>
    <template is="dom-if" if="{{showApod}}">
      <apod-element></apod-element>
    </template>
    <template is="dom-if" if="{{showBeer}}">
    </template>
</div>


    `;