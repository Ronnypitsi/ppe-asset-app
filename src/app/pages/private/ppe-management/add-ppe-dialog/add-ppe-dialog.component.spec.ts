import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPpeDialogComponent } from './add-ppe-dialog.component';

describe('AddPpeDialogComponent', () => {
  let component: AddPpeDialogComponent;
  let fixture: ComponentFixture<AddPpeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPpeDialogComponent]
    });
    fixture = TestBed.createComponent(AddPpeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
