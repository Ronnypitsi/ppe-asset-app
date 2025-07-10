import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserItem } from '../users-management.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  userForm: FormGroup;
  isEditMode: boolean;
  availableRoles: string[] = ['Admin', 'Manager', 'User'];
  availablePermissions: string[] = ['Manage Users', 'View Reports', 'Issue PPE', 'Return PPE'];

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserItem,
    private fb: FormBuilder
  ) {
    this.isEditMode = !!data;

    this.userForm = this.fb.group({
      id: [data?.id || null],
      name: [data?.name || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      role: [data?.role || '', Validators.required],
      permissions: [data?.permissions || [], Validators.required]
    });
  }

  save(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
