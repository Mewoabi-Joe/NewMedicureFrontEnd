import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupPasswordComponent } from './backup-password.component';

describe('BackupPasswordComponent', () => {
  let component: BackupPasswordComponent;
  let fixture: ComponentFixture<BackupPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
