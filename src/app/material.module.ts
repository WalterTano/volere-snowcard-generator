import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


const MATERIAL_COMPONENTS = [
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS
})
export class MaterialModule { }
