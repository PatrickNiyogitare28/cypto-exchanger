import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './home/landing/landing.component';



@NgModule({
  declarations: [
    NavComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    LandingComponent
  ]
})
export class ComponentsModule { }
