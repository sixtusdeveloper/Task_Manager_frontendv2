import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Include CommonModule for directives like *ngIf and *ngFor
import { ReactiveFormsModule } from '@angular/forms'; // If forms are used
import { MatFormFieldModule } from '@angular/material/form-field'; // Material modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  standalone: true, // Mark it as standalone
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add form handling
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'], // Correct the key
})
export class SignupComponent {}




// Original code
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   imports: [],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.scss'
// })
// export class SignupComponent {

// }
