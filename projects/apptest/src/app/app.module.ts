import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JcLibraryButtonComponent } from 'projects/jc-library/button';
import { JcLibraryInputComponent } from 'projects/jc-library/input';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JcLibraryButtonComponent,
    JcLibraryInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
