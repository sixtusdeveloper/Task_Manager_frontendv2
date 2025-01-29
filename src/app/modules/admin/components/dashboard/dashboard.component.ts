import { Component } from '@angular/core';
import { AdminService } from '../../../admin/services/admin.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  listOfTasks: any = [];
  pageSize = 5;          // Default page size
  pageIndex = 0;         // Default page index (first page)
  totalTasks = 0;        // Total number of tasks (for pagination)

  constructor(private service: AdminService) {
    this.getTasks();  // Fetch the first page of tasks
  }

  // Fetch tasks based on page size and index
  getTasks() {
    this.service.getPaginatedTasks(this.pageIndex, this.pageSize).subscribe((data) => {
      this.listOfTasks = data.content;  // Assuming 'content' contains the tasks
      this.totalTasks = data.totalElements;  // Total number of tasks (used by paginator)
    });
  }

  // Method to handle page changes
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getTasks();  // Fetch the new page of tasks based on the new page index and size
  }
}




// Original code without pagination

// import { Component } from '@angular/core';
// import { AdminService } from '../../../admin/services/admin.service';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider'; 
// import { MatPaginatorModule } from '@angular/material/paginator';


// @Component({
//   selector: 'app-dashboard',
//   imports: [
//     CommonModule,
//     MatCardModule,
//     MatDividerModule,
//     MatPaginatorModule,

//   ],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent {

//   listOfTasks: any = [];
//  constructor(private service: AdminService) {
//   this.getTasks();
//   }

//   getTasks() {
//     this.service.getAllTasks().subscribe((data) => {
//       this.listOfTasks = data;
//     });
//   }
// }
