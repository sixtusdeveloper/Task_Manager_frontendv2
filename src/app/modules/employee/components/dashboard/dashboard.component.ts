import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  listOfTasks: any = [];

  constructor(private service: EmployeeService, 
    private router: RouterModule,
    private snackBar: MatSnackBar) {
    this.getTasks();
  }
  
  getTasks() {
    this.service.getEmployeeTasksById().subscribe((response) => {
      console.log(response);
      this.listOfTasks = response;
    });
  }

  updateTaskStatus(id: number, status: string) {
    this.service.updateTaskStatus(id, status).subscribe((response) => {
      if(response.id != null){
        this.snackBar.open('Task status updated successfully', 'Close', {
          duration: 5000,
        });
        this.getTasks();
      }else{
        this.snackBar.open('An error occured while updating task', 'Close', {
          duration: 5000,
        });
      }
    });
  }
}
