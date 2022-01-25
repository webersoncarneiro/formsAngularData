import { BrowserModule } from '@angular/platform-browser';
import { EventEmitter, NgModule, Output , } from '@angular/core';
import {  } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  //  TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  @Output()  somename = new EventEmitter();

}
