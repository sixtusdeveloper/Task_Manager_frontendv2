
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule
import { Router, RouterModule } from '@angular/router';             // Import RouterModule for routerLink
import { StorageService } from './auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true, // Mark it as standalone
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule, // Required for routerLink
    CommonModule, // Add CommonModule
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Ensure correct key
})
export class AppComponent {
  isEmployeeLoggedIn: boolean = StorageService.isEmployeeLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();

  currentYear: number = new Date().getFullYear(); // Initialize currentYear

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router) {
    console.log('Employee Logged In:', this.isEmployeeLoggedIn);
    console.log('Admin Logged In:', this.isAdminLoggedIn);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    });

    // Set the current year dynamically
    this.currentYear = new Date().getFullYear();
  }

  logout() {
    StorageService.logout();
    this.router.navigateByUrl('/login');
  }
}




// import { Component } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
// import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule
// import { Router, RouterModule } from '@angular/router';             // Import RouterModule for routerLink
// import { StorageService } from './auth/services/storage/storage.service';
// import { CommonModule } from '@angular/common';
// import { MatIconModule } from "@angular/material/icon";

// @Component({
//   selector: 'app-root',
//   standalone: true, // Mark it as standalone
//   imports: [
//     MatToolbarModule,
//     MatButtonModule,
//     RouterModule, // Required for routerLink
//     CommonModule, // Add CommonModule
//     MatIconModule,
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'], // Ensure correct key
// })

// export class AppComponent {
//   isEmployeeLoggedIn: boolean = StorageService.isEmployeeLoggedIn();
//   isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();

//   currentYear: number;

//   isMenuOpen = false;
  
//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   constructor(private router: Router) {
//     console.log('Employee Logged In:', this.isEmployeeLoggedIn);
//     console.log('Admin Logged In:', this.isAdminLoggedIn);
//   }

//   ngOnInit() {
//     this.router.events.subscribe((event) => {
//       this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();
//       this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
//       // this.currentYear = new Date().getFullYear(); // Get current ye
//     });
//   }

//   logout() {
//     StorageService.logout();
//     this.router.navigateByUrl('/login');
//   }
// }


