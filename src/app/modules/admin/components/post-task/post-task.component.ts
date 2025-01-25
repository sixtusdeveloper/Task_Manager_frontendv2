import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-task',
  imports: [],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.scss'
})
export class PostTaskComponent {
  taskForm!: FormGroup;
  listOfEmployees: any = []; // Define the type of listOfEmployees
  listOfPriorities: any = ["LOW", "MEDIUM", "HIGH"]; // Define the type of listOfPriorities

  constructor(private adminService: AdminService, private fb: FormBuilder) {
    this.getUsers();
    this.taskForm = this.fb.group({
      employeeId: [null,[Validators.required]],
      title: [null,[Validators.required]],
      description: [null,[Validators.required]],
      dueDate: [null,[Validators.required]],
      priority: [null,[Validators.required]],
    });
  }

  getUsers() {
    this.adminService.getUsers().subscribe(
      (response) => {
        this.listOfEmployees = response;
        console.log(response);
      }
    );
  }

}
