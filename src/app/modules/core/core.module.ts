import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../../material.module';
import { SnowcardFieldComponent } from './components/snowcard-field/snowcard-field.component';
import { SnowcardSectionComponent } from './components/snowcard-section/snowcard-section.component';
import { SnowcardComponent } from './components/snowcard/snowcard.component';
import { SnowcardGridComponent } from './components/snowcard-grid/snowcard-grid.component';
import { SnowcardFieldCreationModalComponent } from './components/snowcard-field-creation-modal/snowcard-field-creation-modal.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { GlobalButtonsComponent } from './components/global-buttons/global-buttons.component';

@NgModule({
  declarations: [
    SnowcardFieldComponent,
    SnowcardSectionComponent,
    SnowcardComponent,
    SnowcardGridComponent,
    SnowcardFieldCreationModalComponent,
    ChipListComponent,
    GlobalButtonsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SnowcardFieldComponent,
    SnowcardSectionComponent,
    SnowcardComponent,
    SnowcardGridComponent,
    SnowcardFieldCreationModalComponent,
    ChipListComponent
  ]
})
export class CoreModule { }
