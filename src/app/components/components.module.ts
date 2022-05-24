import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './home/landing/landing.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './elements/input/input.component';



@NgModule({
  declarations: [
    NavComponent,
    LandingComponent,
    FormComponent,
    InputComponent
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
