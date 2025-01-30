import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: 'app-view-task-details',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './view-task-details.component.html',
  styleUrl: './view-task-details.component.scss'
})
export class ViewTaskDetailsComponent {

  taskId: number;
  taskData: any;

  constructor(private service: AdminService, 
    private activatedRoute: ActivatedRoute, 
    private adminService: AdminService, 
  ) { 
    this.taskId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getTaskById();
  }

  getTaskById() {
    this.service.getTaskById(this.taskId).subscribe((response) => {
      this.taskData = response;
      console.log(response);
    });
  }

}
