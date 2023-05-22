import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ISnowcardField } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-snowcard-field',
  templateUrl: './snowcard-field.component.html',
  styleUrls: ['./snowcard-field.component.scss']
})
export class SnowcardFieldComponent implements OnInit {

  checked: boolean = false;

  @Input() field: ISnowcardField = {};
  @Input() isEditable: boolean = false;

  @Output() delete = new EventEmitter<ISnowcardField>();

  get isTextArea(): boolean {
    return !this.isDropdown && this.field.type?.toLowerCase() === 'textarea';
  }

  get isInput(): boolean {
    return !this.isDropdown && [ 'text', 'number' ].includes(this.field.type!.toLowerCase());
  }

  get isCheckbox(): boolean {
    return this.field.type?.toLowerCase() === 'checkbox';
  }

  get isDropdown(): boolean {
    return this.field.options?.length! > 0;
  }

  constructor() { }

  ngOnInit(): void { }

  handleFieldDelete() {
    this.delete.emit(this.field);
  }
}
