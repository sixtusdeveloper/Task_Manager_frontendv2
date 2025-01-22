import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';             // Import RouterModule for routerLink

import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule, // Required for routerLink
    MatCardModule,  // Add MatCardModule
    MatIconModule,  // Add MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Correct the key
})

export class LoginComponent {

  loginForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
       email:[null, [Validators.required, Validators.email]],
       password:[null, [Validators.required]],

    })

  }

  togglePasswordVisibility(){
   this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }
}



