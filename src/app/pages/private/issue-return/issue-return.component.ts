import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
interface User {
  id: number;
  name: string;
}

interface Item {
  id: number;
  name: string;
  type: 'PPE' | 'Asset';
  status: string;
}

interface IssuedItem extends Item {
  quantity: number;
  issuedTo: string;
}
@Component({
  selector: 'app-issue-return',
  templateUrl: './issue-return.component.html',
  styleUrls: ['./issue-return.component.scss']
})
export class IssueReturnComponent implements OnInit {
  issueForm!: FormGroup;

  users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Mary Smith' }
  ];

  ppeList: Item[] = [
    { id: 1, name: 'Helmet', type: 'PPE', status: 'Available' },
    { id: 2, name: 'Gloves', type: 'PPE', status: 'Available' },
  ];

  assetList: Item[] = [
    { id: 3, name: 'Hammer', type: 'Asset', status: 'Available' },
    { id: 4, name: 'Wrench', type: 'Asset', status: 'Available' },
  ];

  issuedItems: IssuedItem[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.issueForm = this.fb.group({
      user: [null, Validators.required],
      items: this.fb.array([])
    });
  }

  get items(): FormArray<FormGroup> {
    return this.issueForm.get('items') as FormArray<FormGroup>;
  }

  addItem(item: Item): void {
    const existing = this.items.controls.find(ctrl => ctrl.value.item.id === item.id);
    if (!existing) {
      this.items.push(this.fb.group({
        item: [item],
        quantity: [1, [Validators.required, Validators.min(1)]]
      }));
    }
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  issue(): void {
    const user = this.issueForm.value.user.name;
    const selectedItems = this.issueForm.value.items;

    selectedItems.forEach((selected: { item: IssuedItem; quantity: any; }) => {
      const issuedItem: IssuedItem = {
        ...selected.item,
        quantity: selected.quantity,
        issuedTo: user
      };
      this.issuedItems.push(issuedItem);
    });

    alert('Items issued successfully');
    this.items.clear();
  }

  returnItem(item: IssuedItem): void {
    this.issuedItems = this.issuedItems.filter(i => i.id !== item.id);
    alert(`${item.name} returned successfully`);
  }
}
