import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-task',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule for ngIf and ngFor
    ReactiveFormsModule, // Add ReactiveFormsModule for form handling
    MatFormFieldModule, // Add Material modules
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss'], // Fixed the typo (styleUrl -> styleUrls)
})
export class PostTaskComponent {
  taskForm!: FormGroup;
  listOfEmployees: any = []; // Define the type of listOfEmployees
  listOfPriorities: any = ['LOW', 'MEDIUM', 'HIGH']; // Define the type of listOfPriorities

  constructor(private adminService: AdminService, private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.getUsers();
    this.taskForm = this.fb.group({
      employeeId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      priority: [null, [Validators.required]],
    });
  }

  getUsers() {
    this.adminService.getUsers().subscribe((response) => {
      this.listOfEmployees = response;
      console.log(response);
    });
  }

  postTask() {
    console.log(this.taskForm.value);
    this.adminService.postTask(this.taskForm.value).subscribe((response) => {
      if(response.id !== null){
        this.snackBar.open('Task posted successfully', 'Close', {
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

