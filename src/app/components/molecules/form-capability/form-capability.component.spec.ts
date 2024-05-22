import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCapabilityComponent } from './form-capability.component';

describe('FormCapabilityComponent', () => {
  let component: FormCapabilityComponent;
  let fixture: ComponentFixture<FormCapabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCapabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
