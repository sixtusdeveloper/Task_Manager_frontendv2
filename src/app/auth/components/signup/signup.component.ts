import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Include CommonModule for directives like *ngIf and *ngFor
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // If forms are used
import { MatFormFieldModule } from '@angular/material/form-field'; // Material modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true, // Mark it as standalone
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add form handling
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,  // Add MatCardModule
    MatIconModule,  // Add MatIconModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'], // Correct the key
})

export class SignupComponent {

  signupForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private snackBar: MatSnackBar,
    private router: Router
  ){
    this.signupForm = this.fb.group({
       name:[null, [Validators.required]],
       email:[null, [Validators.required, Validators.email]],
       password:[null, [Validators.required]],
       confirmPassword:[null, [Validators.required]],

    })

  }

  togglePasswordVisibility(){
   this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    console.log(this.signupForm.value);
    const password = this.signupForm.get('password')?.value;
    const confirmedPassword = this.signupForm.get('confirmedPassword')?.value;

    if(password !== confirmedPassword){
      this.snackBar.open('Passwords do not match', 'Close', {
        duration: 5000,
        panelClass:'error-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }

    this.authService.signup(this.signupForm.value).subscribe((response) => {
      console.log(response);
      if(response.userId != null){
      this.snackBar.open('Signup successful', 'Close', {
        duration: 5000,
        panelClass:'success-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.router.navigateByUrl('/login');
    } else {
        this.snackBar.open('Signup failed', 'Close', {
          duration: 5000,
          panelClass:'error-snackbar',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
}

