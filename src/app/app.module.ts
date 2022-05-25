import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotToastModule } from '@ngneat/hot-toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
