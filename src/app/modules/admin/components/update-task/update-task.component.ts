import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-update-task',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent {
  id: number;
  updateTaskForm!: FormGroup;
  listOfEmployees: any = []; // Define the type of listOfEmployees
  listOfPriorities: any = ['LOW', 'MEDIUM', 'HIGH']; // Define the type of listOfPriorities
  listOfTaskStatus: any = ['PEDDING', 'INPROGRESS', 'COMPLETED', 'DEFERRED', 'CANCELLED']; // Define the type of listOfPriorities
  
  
  constructor(private service: AdminService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private adminService: AdminService, 
    private snackBar: MatSnackBar, 
    private router: Router) {
    this.getUsers();
    this.id = this.route.snapshot.params['id'];
    this.getTaskById();
     this.updateTaskForm = this.fb.group({
          employeeId: [null, [Validators.required]],
          title: [null, [Validators.required]],
          description: [null, [Validators.required]],
          dueDate: [null, [Validators.required]],
          priority: [null, [Validators.required]],
          taskStatus: [null, [Validators.required]],
        });
  }

  getTaskById() {
    this.service.getTaskById(this.id).subscribe((response) => {
      this.updateTaskForm.patchValue(response);
      console.log(response);
    }); 
  }

  getUsers() {
    this.adminService.getUsers().subscribe((response) => {
      this.listOfEmployees = response;
      console.log(response);
    });
  }

  updateTask() {
    this.adminService.updateTask(this.id, this.updateTaskForm.value).subscribe((response) => {
      if(response.id != null){
        this.snackBar.open('Task updated successfully', 'Close', {
          duration: 5000,
        });
        this.router.navigateByUrl('/admin/dashboard');
      }else{
        this.snackBar.open('Opps, Something went wrong', 'ERROR', {
          duration: 5000, 
        });
      }
    });
  }
}
