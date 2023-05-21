import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';


const MATERIAL_COMPONENTS = [
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatCheckboxModule,
  MatChipsModule
];

@NgModule({
  declarations: [],
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS
})
export class MaterialModule { }
