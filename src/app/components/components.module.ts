import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './home/landing/landing.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './elements/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionsComponent } from './home/transactions/transactions.component';



@NgModule({
  declarations: [
    NavComponent,
    LandingComponent,
    FormComponent,
    InputComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavComponent,
    LandingComponent,
    TransactionsComponent
  ]
})
export class ComponentsModule { }
