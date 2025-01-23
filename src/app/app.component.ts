import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule
import { Router, RouterModule } from '@angular/router';             // Import RouterModule for routerLink
import { StorageService } from './auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Mark it as standalone
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule, // Required for routerLink
    CommonModule, // Add CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Ensure correct key
})

export class AppComponent {
  isEmployeeLoggedIn: boolean = StorageService.isEmployeeLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();

  constructor(private router: Router) {
    console.log('Employee Logged In:', this.isEmployeeLoggedIn);
    console.log('Admin Logged In:', this.isAdminLoggedIn);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    });
  }

  logout() {
    StorageService.logout();
    this.router.navigateByUrl('/login');
  }
}

