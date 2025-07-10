import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPpeDialogComponent } from './add-ppe-dialog/add-ppe-dialog.component';
export interface PPEItem {
  id: number;
  name: string;
  category: string;
  status: string;
  issuedTo: string;
}
@Component({
  selector: 'app-ppe-management',
  templateUrl: './ppe-management.component.html',
  styleUrls: ['./ppe-management.component.scss']
})
export class PpeManagementComponent implements OnInit {
  ppeList: PPEItem[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Sample data
    this.ppeList = [
      { id: 1, name: 'Helmet', category: 'Head Protection', status: 'Available', issuedTo: '' },
      { id: 2, name: 'Safety Gloves', category: 'Hand Protection', status: 'Issued', issuedTo: 'John Doe' },
      { id: 3, name: 'Safety Shoes', category: 'Foot Protection', status: 'Available', issuedTo: '' },
    ];
  }
  addPPE(): void {
    const dialogRef = this.dialog.open(AddPpeDialogComponent, {
      width: '400px',
      data: { id: this.ppeList.length + 1 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ppeList.push(result);
      }
    });
  }
  issuePPE(item: PPEItem): void {
    // Implement issue logic here
    alert(`Issuing ${item.name}`);
  }

  returnPPE(item: PPEItem): void {
    // Implement return logic here
    alert(`Returning ${item.name}`);
  }
}
