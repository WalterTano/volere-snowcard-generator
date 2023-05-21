import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISnowcard } from '../../interfaces';

@Component({
  selector: 'app-snowcard',
  templateUrl: './snowcard.component.html',
  styleUrls: ['./snowcard.component.scss']
})
export class SnowcardComponent implements OnInit {

  isEditMode: boolean = true;

  @Input() snowcard: ISnowcard = { sections: [] };
  @Output() delete = new EventEmitter<number>();

  get snowcardTitle() {
    return `Requirement #${this.snowcard.requirementNumber}`;
  }

  constructor() { }

  ngOnInit(): void { }

  handleDelete() {
    this.delete.emit(this.snowcard.requirementNumber);
  }

  handleSectionAdd() {
    this.snowcard.sections?.push({ fields: [] });
  }

}
