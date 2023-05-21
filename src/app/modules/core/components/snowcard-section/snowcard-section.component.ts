import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ISnowcardField, ISnowcardSection } from '../../interfaces';
import { SnowcardFieldCreationModalComponent } from '../snowcard-field-creation-modal/snowcard-field-creation-modal.component';
import { SnowcardService } from '../../services/snowcard.service';

@Component({
  selector: 'app-snowcard-section',
  templateUrl: './snowcard-section.component.html',
  styleUrls: ['./snowcard-section.component.scss']
})
export class SnowcardSectionComponent implements OnInit {

  @Input() section: ISnowcardSection = { fields: [] };
  @Input() sectionNumber?: number;
  @Input() isEditMode: boolean = false;

  get hasTextAreaField(): boolean {
    return this.section.fields?.find(f => f.type === 'textArea') !== undefined;
  }

  constructor(
    private dialog: MatDialog,
    private snowcardService: SnowcardService
  ) { }

  ngOnInit(): void { }

  handleFieldAdd() {
    const dialogRef = this.dialog.open(SnowcardFieldCreationModalComponent, {
      width: '75%',
    });

    dialogRef.afterClosed().subscribe(
      (result: { addToTemplate: boolean, field: ISnowcardField }) => {
        if (!result) return;

        if (result.addToTemplate) {
          this.snowcardService.addFieldToTemplate(result.field, this.sectionNumber!);
        } else {
          this.section.fields?.push(result.field);
        }
    });
  }

}
