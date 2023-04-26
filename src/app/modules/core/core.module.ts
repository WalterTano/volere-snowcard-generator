import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnowcardFieldComponent } from './components/snowcard-field/snowcard-field.component';



@NgModule({
  declarations: [
    SnowcardFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SnowcardFieldComponent
  ]
})
export class CoreModule { }
