import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PpeManagementComponent } from './ppe-management/ppe-management.component';
import { IssueReturnComponent } from './issue-return/issue-return.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ppe-management', component: PpeManagementComponent },
  { path: 'asset-management', component: AssetManagementComponent },
  { path: 'inventory-management', component:InventoryManagementComponent},
  { path: 'users-management', component:UsersManagementComponent},
  { path: 'IssueReturn', component:IssueReturnComponent }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
