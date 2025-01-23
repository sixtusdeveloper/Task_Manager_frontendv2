import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post-task',
  imports: [],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.scss'
})
export class PostTaskComponent {
  constructor(private adminService: AdminService ) {
    this.getUsers();
  }

  getUsers() {
    this.adminService.getUsers().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
