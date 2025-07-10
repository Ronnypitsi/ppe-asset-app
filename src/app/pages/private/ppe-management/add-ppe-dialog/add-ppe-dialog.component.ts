import { Component, Inject } from '@angular/core';
import { PPEItem } from '../ppe-management.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ppe-dialog',
  templateUrl: './add-ppe-dialog.component.html',
  styleUrls: ['./add-ppe-dialog.component.scss']
})
export class AddPpeDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PPEItem) {}
}
