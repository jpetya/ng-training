import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import {
  NotFoundComponent,
  NavigationComponent,
  ApiService,
  AuthService,
  AuthGuard
} from './shared.barrel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NotFoundComponent,
    NavigationComponent
  ],
  declarations: [
    NotFoundComponent,
    NavigationComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
