import { Component, Input, OnInit } from '@angular/core';

import { ISnowcardField } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-snowcard-field',
  templateUrl: './snowcard-field.component.html',
  styleUrls: ['./snowcard-field.component.scss']
})
export class SnowcardFieldComponent implements OnInit {

  @Input() field: ISnowcardField = {};

  get isTextArea(): boolean {
    return !this.isDropdown && this.field.type?.toLowerCase() === 'textarea';
  }

  get isInput(): boolean {
    return !this.isDropdown && this.field.type?.toLowerCase() !== 'textarea';
  }

  get isDropdown(): boolean {
    return this.field.options?.length! > 0;
  }

  constructor() { }

  ngOnInit(): void { }

}
