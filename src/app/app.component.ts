import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule
import { RouterModule } from '@angular/router';             // Import RouterModule for routerLink

@Component({
  selector: 'app-root',
  standalone: true, // Mark it as standalone
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule, // Required for routerLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Ensure correct key
})

export class AppComponent {
  title = 'task_manager_frontend';
}

