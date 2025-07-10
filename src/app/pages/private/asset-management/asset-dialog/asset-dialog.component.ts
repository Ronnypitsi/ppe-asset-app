import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface AssetItem {
  id: number;
  name: string;
  category: string;
  status: string;
  location: string;
}

@Component({
  selector: 'app-asset-dialog',
  templateUrl: './asset-dialog.component.html',
  styleUrls: ['./asset-dialog.component.scss']
})
export class AssetDialogComponent {
  assetForm: FormGroup;
  isEditMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<AssetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssetItem,
    private fb: FormBuilder
  ) {
    this.isEditMode = !!data;

    this.assetForm = this.fb.group({
      id: [data?.id || null],
      name: [data?.name || '', Validators.required],
      category: [data?.category || '', Validators.required],
      status: [data?.status || 'Available', Validators.required],
      location: [data?.location || '', Validators.required],
    });
  }

  save(): void {
    if (this.assetForm.valid) {
      this.dialogRef.close(this.assetForm.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
