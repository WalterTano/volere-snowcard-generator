import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testField = {
    type: 'string',
    value: 'This is a field',
    name: 'Field 1'
  }

  testSection = {
    fields: [
      {
        type: 'string',
        value: 'This is a field',
        name: 'Field 1'
      },
      {
        type: 'string',
        value: 'This is a field',
        name: 'Field 2'
      }
    ]
  };
}
