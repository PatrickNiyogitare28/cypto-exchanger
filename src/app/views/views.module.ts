import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
