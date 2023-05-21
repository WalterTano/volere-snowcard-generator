import { Component, Input, OnInit } from '@angular/core';
import { ISnowcardSection } from '../../interfaces';

@Component({
  selector: 'app-snowcard-section',
  templateUrl: './snowcard-section.component.html',
  styleUrls: ['./snowcard-section.component.scss']
})
export class SnowcardSectionComponent implements OnInit {

  @Input() section: ISnowcardSection = { fields: [] };
  @Input() isEditMode: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  handleFieldAdd() {
    // open modal
    // then add resulting field
    // include checkbox to add to all existing requirements
  }

}
