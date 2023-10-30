import { Component ,ViewEncapsulation} from '@angular/core';
import { format } from 'date-fns';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'jc-library-button',
  template: `

    <button mat-button color="primary"  (click)="showDate()">
    
    <ng-content>
    </ng-content>
    </button>
  `,
  styles: [
  ],
  imports:[MatButtonModule,MatIconModule],
  encapsulation:ViewEncapsulation.None
})
export class JcLibraryButtonComponent {

  showDate() : void {
    console.log(format(new Date(),"MM/dd/yyyyy"))
    
  } 


}
