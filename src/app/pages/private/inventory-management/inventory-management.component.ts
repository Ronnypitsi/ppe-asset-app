import { Component, OnInit } from '@angular/core';

export interface InventoryItem {
  id: number;
  name: string;
  type: string; // PPE or Asset
  category: string;
  quantity: number;
  status: string;
}

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent implements OnInit {
  inventoryList: InventoryItem[] = [];

  constructor() {}

  ngOnInit(): void {
    // Sample data
    this.inventoryList = [
      { id: 1, name: 'Safety Helmet', type: 'PPE', category: 'Head Protection', quantity: 50, status: 'Available' },
      { id: 2, name: 'Gloves', type: 'PPE', category: 'Hand Protection', quantity: 120, status: 'Available' },
      { id: 3, name: 'Hammer', type: 'Asset', category: 'Tools', quantity: 10, status: 'Available' },
      { id: 4, name: 'Drill Machine', type: 'Asset', category: 'Machinery', quantity: 5, status: 'Issued' },
    ];
  }

  addInventory(): void {
    alert('Add Inventory button clicked');
  }

  editInventory(item: InventoryItem): void {
    alert(`Edit inventory item: ${item.name}`);
  }

  deleteInventory(item: InventoryItem): void {
    const confirmed = confirm(`Delete inventory item: ${item.name}?`);
    if (confirmed) {
      this.inventoryList = this.inventoryList.filter(i => i.id !== item.id);
    }
  }
}
