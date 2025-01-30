import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import this


@Component({
  selector: 'app-view-task-details',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule, // ✅ Add this
    MatInputModule, // ✅ Add this
  ],
  templateUrl: './view-task-details.component.html',
  styleUrl: './view-task-details.component.scss'
})
export class ViewTaskDetailsComponent {

  taskId: number;
  taskData: any;
  commentForm!: FormGroup;

  constructor(private service: AdminService, 
    private activatedRoute: ActivatedRoute, 
    private adminService: AdminService, 
    private snackBar: MatSnackBar,
    private fb: FormBuilder

  ) { 
    this.taskId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getTaskById();
    this.commentForm = this.fb.group({
      comment: [null, Validators.required],
    });
  }

  getTaskById() {
    this.service.getTaskById(this.taskId).subscribe((response) => {
      this.taskData = response;
      console.log(response);
    });
  }

  publishComment() {
    console.log(this.commentForm.value);
    this.service.createComment(this.taskId, this.commentForm.get("content")?.value).subscribe((response) => {
      if(response.id != null){
        this.snackBar.open('Comment published successfully', 'Close', {
          duration: 5000,
        });
        this.getTaskById();
      }else{
        this.snackBar.open('An error occured while publishing comment', 'Close', {
          duration: 5000,
        });
      }
    });
  }
}
