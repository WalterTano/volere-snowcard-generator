import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { IDropdownOption, ISnowcardField } from '../../interfaces';
import { SnowcardService } from '../../services/snowcard.service';

@Component({
  selector: 'app-snowcard-field-creation-modal',
  templateUrl: './snowcard-field-creation-modal.component.html',
  styleUrls: ['./snowcard-field-creation-modal.component.scss']
})
export class SnowcardFieldCreationModalComponent implements OnInit {

  typeOptions: IDropdownOption<string>[] = [];
  fieldForm = this.fb.group({
    name: [ '', Validators.required ],
    type: [ '', Validators.required ],
    options: new FormControl<string[]>([]),
    addToTemplate: [ false ]
  });

  get addToTemplate(): boolean {
    return this.fieldForm.value.addToTemplate!;
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SnowcardFieldCreationModalComponent>,
    private snowcardService: SnowcardService
  ) {}

  ngOnInit(): void {
    this.snowcardService.getSnowcardTypes()
    .subscribe( result => {
      this.typeOptions = result;
    });
  }

  handleSave() {
    const rawField = this.fieldForm.value;

    const field: ISnowcardField = {
      options: rawField.options?.map(opt => { return { label: opt, value: opt }; }),
      name: rawField.name!,
      type: rawField.type!,
      value: ''
    };

    this.dialogRef.close({
      field,
      addToTemplate: this.addToTemplate
    });
  }

  handleClose() {
    this.dialogRef.close();
  }
}
