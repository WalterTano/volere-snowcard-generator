import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() delete = new EventEmitter<ISnowcardSection>();

  get hasTextAreaField(): boolean {
    return this.section.fields?.find(f => f.type?.toLowerCase() === 'textarea') !== undefined;
  }

  get fieldSize(): number {
    return 12 / this.section.fields?.length!;
  }

  constructor(
    private dialog: MatDialog,
    private snowcardService: SnowcardService
  ) { }

  ngOnInit(): void { }

  handleFieldAdd() {
    const dialogRef = this.dialog.open(SnowcardFieldCreationModalComponent, {
      data: {
        enableTextArea: false
      }
    });

    dialogRef.afterClosed().subscribe(
      (result: { addToTemplate: boolean, field: ISnowcardField }) => {
        if (!result) return;

        if (result.addToTemplate) {
          this.snowcardService.addFieldToTemplate(result.field, this.sectionNumber!);
        }

        this.section.fields?.push(result.field);
    });
  }

  handleFieldDelete($event: ISnowcardField) {
    this.section.fields = this.section.fields?.filter(field => $event !== field);

    if (this.section.fields?.length === 0) {
      this.delete.emit(this.section);
    }
  }

}
