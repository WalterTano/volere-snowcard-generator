import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnowcardFieldComponent } from './components/snowcard-field/snowcard-field.component';
import { SnowcardSectionComponent } from './components/snowcard-section/snowcard-section.component';
import { SnowcardComponent } from './components/snowcard/snowcard.component';

@NgModule({
  declarations: [
    SnowcardFieldComponent,
    SnowcardSectionComponent,
    SnowcardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SnowcardFieldComponent,
    SnowcardSectionComponent,
    SnowcardComponent
  ]
})
export class CoreModule { }
