import { AppRoutingModule } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { EventEmitter, NgModule, Output , } from '@angular/core';
import {  } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  //  TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  @Output()  somename = new EventEmitter();

}
