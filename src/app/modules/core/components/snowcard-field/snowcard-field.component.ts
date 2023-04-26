import { Component, Input, OnInit } from '@angular/core';

import { SnowcardField } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-snowcard-field',
  templateUrl: './snowcard-field.component.html',
  styleUrls: ['./snowcard-field.component.scss']
})
export class SnowcardFieldComponent implements OnInit {

  @Input() field: SnowcardField = {};

  constructor() { }

  ngOnInit(): void { }

}
