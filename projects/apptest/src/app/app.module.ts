import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JcLibraryButtonComponent } from 'projects/jc-library/button';
import { JcLibraryInputComponent } from 'projects/jc-library/input';
import { ChangeColorDirective } from 'projects/jc-library/change-color-background';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JcLibraryButtonComponent,
    JcLibraryInputComponent,
    ChangeColorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
