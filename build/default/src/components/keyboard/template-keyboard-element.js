import { html } from "../../../node_modules/@polymer/polymer/polymer-element.js";
export const template = html`
      <table>
    <tbody>
        <tr>
            <td><button on-click="_handleClick" value="7">7</button></td>
            <td><button on-click="_handleClick" value="8">8</button></td>
            <td><button on-click="_handleClick" value="9">9</button></td>
            <td><button on-click="_handleClick" value="/">/</button></td>
        </tr>
        <tr>
            <td><button on-click="_handleClick" value="4">4</button></td>
            <td><button on-click="_handleClick" value="5">5</button></td>
            <td><button on-click="_handleClick" value="6">6</button></td>
            <td><button on-click="_handleClick" value="*">*</button></td>
        </tr>
        <tr>
            <td><button on-click="_handleClick" value="1">1</button></td>
            <td><button on-click="_handleClick" value="2">2</button></td>
            <td><button on-click="_handleClick" value="3">3</button></td>
            <td><button on-click="_handleClick" value="-">-</button></td>
        </tr>
        <tr>
            <td><button on-click="_handleClick" value=".">.</button></td>
            <td><button on-click="_handleClick" value="0">0</button></td>
            <td><button on-click="_handleClick" value="=">=</button></td>
            <td><button on-click="_handleClick" value="+">+</button></td>
        </tr>
    </tbody>
</table>

    `;