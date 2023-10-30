import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { provideAnimations } from '@angular/platform-browser/animations';


@Component({
  standalone: true,
  selector: 'jc-library-input',
  template: `
    <input matInput type="text" [(ngModel)]="datos" />

    <h1>{{ datos }}</h1>
  `,
  styles: [
    `
      .example-form-field {
        width: 200px;
      }
    `,
    
  ],
  imports: [
    MatInputModule,
    FormsModule,
  ],
  providers: [provideAnimations()],
})
export class JcLibraryInputComponent {
  public datos = 'Test input';
}
