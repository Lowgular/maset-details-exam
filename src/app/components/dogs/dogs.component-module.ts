import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { DogsComponent } from './dogs.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatGridListModule, MatTableModule],
  declarations: [DogsComponent],
  providers: [],
  exports: [DogsComponent],
})
export class DogsComponentModule { }
