import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpeManagementComponent } from './ppe-management.component';

describe('PpeManagementComponent', () => {
  let component: PpeManagementComponent;
  let fixture: ComponentFixture<PpeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpeManagementComponent]
    });
    fixture = TestBed.createComponent(PpeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
