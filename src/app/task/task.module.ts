import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import {
  TaskRoutingModule,
  TaskListComponent,
  TaskListItemComponent,
  TaskService,
  AgePipe
} from './task.barrel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    MaterialModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent,
    AgePipe
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
