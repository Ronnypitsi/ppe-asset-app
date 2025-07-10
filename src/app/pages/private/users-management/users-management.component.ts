import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
export interface UserItem {
  id: number;
  name: string;
  email: string; // PPE or Asset
  role: string;
  permissions: string[];
}
@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent {
  users: UserItem[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Sample data
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', permissions: ['Manage Users', 'View Reports'] },
      { id: 2, name: 'Mary Smith', email: 'mary@example.com', role: 'Manager', permissions: ['View Reports'] },
    ];
  }

  addUser(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = this.users.length + 1; // Generate simple ID
        this.users.push(result);
      }
    });
  }

  editUser(user: UserItem): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.users[index] = result;
        }
      }
    });
  }

  deleteUser(user: UserItem): void {
    const confirmed = confirm(`Delete user: ${user.name}?`);
    if (confirmed) {
      this.users = this.users.filter(u => u.id !== user.id);
    }
  }
}
