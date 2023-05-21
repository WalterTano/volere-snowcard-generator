import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnowcardFieldComponent } from './components/snowcard-field/snowcard-field.component';
import { SnowcardSectionComponent } from './components/snowcard-section/snowcard-section.component';
import { SnowcardComponent } from './components/snowcard/snowcard.component';
import { SnowcardGridComponent } from './components/snowcard-grid/snowcard-grid.component';

@NgModule({
  declarations: [
    SnowcardFieldComponent,
    SnowcardSectionComponent,
    SnowcardComponent,
    SnowcardGridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SnowcardFieldComponent,
    SnowcardSectionComponent,
    SnowcardComponent,
    SnowcardGridComponent
  ]
})
export class CoreModule { }
