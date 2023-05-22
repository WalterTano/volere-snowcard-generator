import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISnowcard, ISnowcardField, ISnowcardSection } from '../../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { SnowcardFieldCreationModalComponent } from '../snowcard-field-creation-modal/snowcard-field-creation-modal.component';
import { SnowcardService } from '../../services/snowcard.service';

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

  constructor(
    private dialog: MatDialog,
    private snowcardService: SnowcardService
  ) { }

  ngOnInit(): void { }

  handleDelete() {
    this.delete.emit(this.snowcard.requirementNumber);
  }

  handleSectionAdd() {
    const dialogRef = this.dialog.open(SnowcardFieldCreationModalComponent, {
      data: {
        enableTextArea: true
      }
    });

    dialogRef.afterClosed().subscribe(
      (result: { addToTemplate: boolean, field: ISnowcardField }) => {
        if (!result) return;

        if (result.addToTemplate) {
          this.snowcardService.addFieldToTemplate(result.field, this.snowcard.sections?.length!);
        }

        this.snowcard.sections?.push({ fields: [ result.field ] });
    });

  }

  handleSectionDelete($event: ISnowcardSection) {
    this.snowcard.sections = this.snowcard.sections?.filter(section => section !== $event);
  }

}
