import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssetDialogComponent } from './asset-dialog/asset-dialog.component';
export interface AssetItem {
  id: number;
  name: string;
  category: string;
  status: string;
  location: string;
}

@Component({
  selector: 'app-asset-management',
  templateUrl: './asset-management.component.html',
  styleUrls: ['./asset-management.component.scss']
})
export class AssetManagementComponent implements OnInit {
  assetList: AssetItem[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Sample data
    this.assetList = [
      { id: 1, name: 'Hammer', category: 'Tools', status: 'Available', location: 'Store Room A' },
      { id: 2, name: 'Drill Machine', category: 'Machinery', status: 'Issued', location: 'Workshop B' },
      { id: 3, name: 'Ladder', category: 'Equipment', status: 'Available', location: 'Store Room B' },
    ];
  }

  addAsset(): void {
    const dialogRef = this.dialog.open(AssetDialogComponent, {
      width: '400px',
      data: null
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = this.assetList.length + 1; // Generate simple ID
        this.assetList.push(result);
      }
    });
  }
  
  editAsset(asset: AssetItem): void {
    const dialogRef = this.dialog.open(AssetDialogComponent, {
      width: '400px',
      data: asset
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.assetList.findIndex(a => a.id === asset.id);
        if (index !== -1) {
          this.assetList[index] = result;
        }
      }
    });
  }
  deleteAsset(asset: AssetItem): void {
    const confirmed = confirm(`Delete asset: ${asset.name}?`);
    if (confirmed) {
      this.assetList = this.assetList.filter(a => a.id !== asset.id);
    }
  }
}