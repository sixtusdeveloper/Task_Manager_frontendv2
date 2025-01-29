import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  ListOfTasks: any = [];

  constructor(private service: EmployeeService) {
    this.getTasks();
  }
  
  getTasks() {
    this.service.getEmployeeTasksById().subscribe((response) => {
      console.log(response);
      this.ListOfTasks = response;
    });
  }
}
