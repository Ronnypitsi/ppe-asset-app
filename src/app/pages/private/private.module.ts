import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PpeManagementComponent } from './ppe-management/ppe-management.component';
import { AddPpeDialogComponent } from './ppe-management/add-ppe-dialog/add-ppe-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IssueReturnComponent } from './issue-return/issue-return.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { AssetDialogComponent } from './asset-management/asset-dialog/asset-dialog.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { UserDialogComponent } from './users-management/user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PpeManagementComponent,
    AddPpeDialogComponent,
    IssueReturnComponent,
    AssetManagementComponent,
    AssetDialogComponent,
    InventoryManagementComponent,
    UsersManagementComponent,
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PrivateModule { }
