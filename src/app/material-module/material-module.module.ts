import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatButtonModule,
    MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDividerModule,
    MatProgressSpinnerModule, MatGridListModule, MatChipsModule,
    MatBadgeModule, MatIconModule, MatMenuModule, MatTableModule, MatDialogModule, 
    MatSelectModule, MatDatepickerModule]
})
export class MaterialModuleModule { }
